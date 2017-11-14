external val QuestJson: dynamic

interface QuestItem {
    val name: String
    fun isCorrect(): Boolean
    fun check() {
        if (isCorrect()) changeState("${name}SS", getAllState("${name}SS").first())
        else changeState("${name}SS", getAllState("${name}SS").last())
    }
}

object Quest {

    var listQuestSlide: List<QuestSlide>
    val mapQuestJson = jsonToMap(QuestJson)

    init {
        listQuestSlide = Data.slides
                .map { slide ->
                    val listQuestItem = ArrayList<QuestItem>()
                    val listQuestTEB = getTEBsOnSlide(slide.name)
                            .filter { mapQuestJson.containsKey(it.name) }
                            .map { QuestTEB(it, mapQuestJson.getValue(it.name)) }
                            .toList()
                    val listQuestClickBox = getItemsOnSlide(slide.name)
                            .filter { mapQuestJson.containsKey(it.name) }
                            .map { QuestClickBox(it, mapQuestJson.getValue(it.name)) }
                            .toList()
                    listQuestItem.addAll(listQuestTEB)
                    listQuestItem.addAll(listQuestClickBox)
                    QuestSlide(slide.name, listQuestItem)
                }.toList()
    }

    data class QuestSlide(val name: String, private val listQuestItem: List<QuestItem>) {

        private val isCorrect
        get() = listQuestItem.filter { it.isCorrect() }.count() == listQuestItem.size

        fun isCorrect(): Boolean {
            listQuestItem.forEach { it.check() }
            return isCorrect
        }
    }

    data class QuestTEB(private val teb: TEB, private val regex: String) : QuestItem {
        override val name = teb.name
        private var isCorrect: Boolean = false
        override fun isCorrect() = isCorrect

        init {
            CpEvent.getVariableValueChanged(teb.varName).subscribe { change(it) }
        }

        private fun change(itemEvent: VariableValueChanged) {
            if (itemEvent.varName == teb.varName) {
                isCorrect = itemEvent.newVal.matches(Regex(regex))
            }
        }
    }

    data class QuestClickBox(private val item: Item, private val regex: String) : QuestItem {

        override val name = item.name
        private var isCorrect = regex == "true"
        override fun isCorrect() = isCorrect

        init {
            CpEvent.interactiveItemSubmit
                    .filter { it.issuccess }
                    .filter { it.itemname == item.name }
                    .subscribe { change() }
        }

        private fun change() {
            isCorrect = !isCorrect
            if (getCurrentItemState(name) == getAllState(name).first()) changeState(name, getAllState(name).last())
            else changeState(name, getAllState(name).first())
        }
    }

    private fun jsonToMap(json: dynamic): Map<String, String> {
        val map: MutableMap<String, String> = linkedMapOf()
        for (key in js("Object").keys(json)) {
            map.put(key as String, json[key] as String)
        }
        return map
    }

    @JsName("checkCurrentSlide")
    fun checkCurrentSlide() = listQuestSlide
            .filter { it.name == window.cpInfoCurrentSlideLabel }
            .map { it.isCorrect() }
            .single()
}


