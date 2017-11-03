interface QuestItem {
    fun isCorrect(): Boolean
}

object Quest {

    data class EntryField(val name: String, val regExp: Regex) : QuestItem {
        override fun isCorrect() = when {
            getValueTEB(name).matches(regExp) -> {
                changeState("${name}SS", "Normal")
                true
            }
            else -> {
                changeState("${name}SS", "Incorrect")
                false
            }
        }
    }

    data class CheckBox(val name: String) : QuestItem {


        override fun isCorrect(): Boolean {
            return false
        }
    }

    init {
    }
}