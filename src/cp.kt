external val cp: dynamic
external val window: dynamic
external val Object: dynamic
external val Rx:dynamic

data class Slide(val name: String, val id: Int, val uid: String)
data class TEB(val name: String, val varName: String, val slideUID: String)
data class Item(val name: String, val slideUID: String)

object Data {

    var slides = ArrayList<Slide>()
    var items = ArrayList<Item>()
    var TEBs = ArrayList<TEB>()

    init {
        window["__________userName__________"] = when {
            window.cpQuizInfoStudentName.toString() == "" -> "Константин Александрович"
            else -> {
                window.cpQuizInfoStudentName.toString()
                        .trim()
                        .split(" ")
                        .takeLast(2)
                        .reduce { acc, s -> "$acc $s" }
            }
        }

        Object.keys(cp.D).toString().split(",").forEach {
            when {
                cp.D[it].hasOwnProperty("lb") -> {
                    slides.add(Slide(
                            cp.D[it].lb.toString(),
                            cp.D[it].id,
                            cp.D[it].mdi.toString().removeSuffix("c")
                    ))
                }
                cp.D[it].hasOwnProperty("vn") -> {
                    TEBs.add(TEB(
                            cp.D[it].mdi.toString().removeSuffix("c"),
                            cp.D[it].vn.toString(),
                            cp.D[it].apsn.toString()
                    ))
                }
                (cp.D[it].hasOwnProperty("apsn") &&
                        cp.D[it].hasOwnProperty("mdi") &&
                        !cp.D[it].mdi.toString().contains(Regex("^si[0-9]"))) -> {
                    items.add(Item(
                            cp.D[it].mdi.toString().removeSuffix("c"),
                            cp.D[it].apsn.toString()
                    ))
                }
            }
        }
    }
}

@JsName("goToSlideByLabel")
fun goToSlideByLabel(label: String) {
    window.cpCmndGotoSlideByUIDAndResume = getSlideID(label)
}

@JsName("getSlideID")
fun getSlideID(label: String) = Data.slides.first { it.name == label }.id

@JsName("getSlideUID")
fun getSlideUID(label: String) = Data.slides.first { it.name == label }.uid

@JsName("getSlideNameById")
fun getSlideNameById(id: Int) = Data.slides.first { it.id == id }.name

@JsName("getSlideNameByUID")
fun getSlideNameByUID(uid: String) = Data.slides.first { it.uid == uid }.name

@JsName("getItem")
fun getItem(label: String) = Data.items.first { it.name == label }

@JsName("getItems")
fun getItems(label: String) = Data.items.filter { it.name.contains(label) }.toList()

@JsName("hide")
fun hide(label: String) {
    cp.hide(label)
}

@JsName("hideAll")
fun hideAll(label: String) {
    Data.items.filter { it.name.contains(label) }
            .forEach { cp.hide(it.name) }
}

@JsName("show")
fun show(label: String) {
    cp.show(label)
}

@JsName("showAll")
fun showAll(label: String) {
    Data.items.filter { it.name.contains(Regex(label)) }
            .forEach { cp.show(it.name) }
}

@JsName("getState")
fun getState(label: String) = cp.getCurrentStateNameForSlideItem(label).toString()

@JsName("getAllState")
fun getAllState(label: String): ArrayList<String> {
    if (Data.items.filter { it.name == label }.count() == 0) return ArrayList()
    return Object.keys(cp.D[label].stl).toString()
            .split(",")
            .map { cp.D[label].stl[it].stn }
            .map { it.toString() }
            .toCollection(ArrayList())
}

@JsName("changeState")
fun changeState(label: String, state: String) {
    cp.changeState(label, state)
}

@JsName("changeStateAll")
fun changeStateAll(label: String, state: String) {
    Data.items.filter { it.name.contains(label) }
            .forEach { cp.changeState(it.name, state) }
}

@JsName("getTEBs")
fun getTEBs(label: String) = Data.TEBs.filter { it.name.contains(label) }.toList()

@JsName("getValueTEB")
fun getValueTEB(label: String) = cp.D["${label}c"].txt.toString()

@JsName("getValue")
fun getValue(label: String) = window[label].toString()

@JsName("setValue")
fun setValue(label: String, value: Any) {
    when (value) {
        is Int -> window[label] = value
        is String -> window[label] = value
        is Boolean -> window[label] = value
    }
}

@JsName("getStudentID")
fun getStudentID() = SCORM.getValue(DataSCORM.LearnerId.value)

@JsName("completed")
fun completed() {
    SCORM.setValue(DataSCORM.CompletionStatus.value, "completed")
    SCORM.setValue(DataSCORM.SuccessStatus.value, "passed")
}

@JsName("setPercent")
fun setPercent(percent: Float) {
    SCORM.setValue(DataSCORM.ScoreScaled.value, percent)
}

@JsName("getPercent")
fun getPercent() = SCORM.getValue(DataSCORM.ScoreScaled.value).toFloatOrNull() ?: 0.0f

@JsName("getFullStudentName")
fun getFullStudentName() = SCORM.getValue(DataSCORM.LearnerName.value)

@JsName("getStudentName")
fun getStudentName() = SCORM.getValue(DataSCORM.LearnerName.value)
        .trim()
        .split(" ")
        .takeLast(2)
        .reduce { acc, s -> "$acc $s" }

@JsName("getItemsOnSlide")
fun getItemsOnSlide(slideName: String) = Data.items.filter { getSlideUID(slideName) == it.slideUID }.toList()

@JsName("getTEBsOnSlide")
fun getTEBsOnSlide(slideName: String) = Data.TEBs.filter { getSlideUID(slideName) == it.slideUID }.toList()



