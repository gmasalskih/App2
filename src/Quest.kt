external val QuestJson: dynamic

object Init {
    var suffixSmartShape = "SS"
    var booleanTrueMarker = "true"
    var varNameUserName = "__________userName__________"
    var defaultUserName = "Константин Александрович"
    var varNameQuestJson = "QuestJson"
}

interface QuestItem {
    val name: String
    fun isCorrect(): Boolean
    fun check() = if (isCorrect()) changeState("$name${Init.suffixSmartShape}", getAllState("$name${Init.suffixSmartShape}").first())
    else changeState("$name${Init.suffixSmartShape}", getAllState("$name${Init.suffixSmartShape}").last())
}

object Quest {

    var listQuestSlide: List<QuestSlide>
    val mapQuestJson = jsonToMap(window[Init.varNameQuestJson])

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

    data class QuestSlide(val name: String, val listQuestItem: List<QuestItem>) {

        private val isCorrect: Boolean
            get() = listQuestItem.filter { it.isCorrect() }.count() == listQuestItem.size

        fun isCorrect(): Boolean {
            listQuestItem.forEach { it.check() }
            return isCorrect
        }
    }

    data class QuestTEB(val teb: TEB, val regex: String) : QuestItem {
        override val name = teb.name
        override fun isCorrect() = getValueTEB(name).trim().matches(Regex(regex))
    }


    data class QuestClickBox(val item: Item, val regex: String) : QuestItem {

        override val name = item.name
        private var isCorrect = regex == Init.booleanTrueMarker
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


