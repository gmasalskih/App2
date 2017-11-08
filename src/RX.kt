external interface CpObserver<T> {
    fun subscribe(event: (any: T) -> Unit)
    fun filter(predicate: (value: T) -> Boolean): CpObserver<T>
}

external class SlideEnter {
    val lb: String
    val mdi: String
    val slideNumber: Int
}

external class SlideExit {
    val lb: String
    val mdi: String
    val slideNumber: Int
}

external class InteractiveItemSubmit {
    val frameNumber:Int
    val includedInQuiz:Boolean
    val issuccess:Boolean
    val itemname: String
    val slideNumber:Int
}

external class QuestionSkip {
    val correctAnswer:String
    val infiniteAttempts:Boolean
    val interactionID:String
    val interactionType:String
    val objectiveID:String
    val questionAnswered:Boolean
    val questionAnsweredCorrectly:Boolean
    val questionAttempts:Int
    val questionMaxAttempts:Int
    val questionMaxScore:Int
    val questionNumber:Int
    val questionScore:Int
    val questionType:String
    val quizName:String
    val reportAnswers:Boolean
    val selectedAnswer:String
    val slideNumber:Int
    val weighting:Int
}

external class QuestionSubmit {
    val correctAnswer:String
    val infiniteAttempts:Boolean
    val interactionID:String
    val interactionType:String
    val objectiveID:String
    val questionAnswered:Boolean
    val questionAnsweredCorrectly:Boolean
    val questionAttempts:Int
    val questionMaxAttempts:Int
    val questionMaxScore:Int
    val questionNumber:Int
    val questionScore:Int
    val questionType:String
    val quizName:String
    val reportAnswers:Boolean
    val selectedAnswer:String
    val slideNumber:Int
    val weighting:Int
}

external class VariableValueChanged {
    val varName: String
    val oldVal: dynamic
    val newVal: dynamic
}

enum class DataCpEvent(val value: String) {
    SlideEnter("CPAPI_SLIDEENTER"),
    SlideExit("CPAPI_SLIDEEXIT"),
    StartPlayBarScrubbing("CPAPI_STARTPLAYBARSCRUBBING"),
    EndPlayBarScrubbing("CPAPI_ENDPLAYBARSCRUBBING"),
    InteractiveItemSubmit("CPAPI_INTERACTIVEITEMSUBMIT"),
    MoviePause("CPAPI_MOVIEPAUSE"),
    MovieResume("CPAPI_MOVIERESUME"),
    MovieStart("CPAPI_MOVIESTART"),
    MovieStop("CPAPI_MOVIESTOP"),
    QuestionSkip("CPAPI_QUESTIONSKIP"),
    QuestionSubmit("CPAPI_QUESTIONSUBMIT"),
    VariableValueChanged("CPAPI_VARIABLEVALUECHANGED")
}

object CpEvent {

    val slideEnter: CpObserver<SlideEnter>
    val slideExit: CpObserver<SlideExit>
    val startPlayBarScrubbing: CpObserver<Unit>
    val endPlayBarScrubbing: CpObserver<Unit>
    val interactiveItemSubmit: CpObserver<InteractiveItemSubmit>
    val moviePause: CpObserver<Int>
    val movieResume: CpObserver<Int>
    val movieStart: CpObserver<Unit>
    val movieStop: CpObserver<Unit>
    val questionSkip: CpObserver<QuestionSkip>
    val questionSubmit: CpObserver<QuestionSubmit>
    private val variableValueChanged = HashMap<String,CpObserver<VariableValueChanged>>()

    @JsName("getVariableValueChanged")
    fun getVariableValueChanged(varName:String):CpObserver<VariableValueChanged>{
        return if (variableValueChanged.containsKey(varName)){
            variableValueChanged[varName]!!
        }else{
            variableValueChanged.put(varName, getEvent(DataCpEvent.VariableValueChanged, varName))
            variableValueChanged[varName]!!
        }
    }

    init {
        slideEnter = getEvent(DataCpEvent.SlideEnter)
        slideExit = getEvent(DataCpEvent.SlideExit)
        startPlayBarScrubbing = getEvent(DataCpEvent.StartPlayBarScrubbing)
        endPlayBarScrubbing = getEvent(DataCpEvent.EndPlayBarScrubbing)
        interactiveItemSubmit = getEvent(DataCpEvent.InteractiveItemSubmit)
        moviePause = getEvent(DataCpEvent.MoviePause)
        movieResume = getEvent(DataCpEvent.MovieResume)
        movieStart = getEvent(DataCpEvent.MovieStart)
        movieStop = getEvent(DataCpEvent.MovieStop)
        questionSkip = getEvent(DataCpEvent.QuestionSkip)
        questionSubmit = getEvent(DataCpEvent.QuestionSubmit)
    }

    private fun <T> getEvent(dataCpEvent: DataCpEvent, itemName: String = ""): CpObserver<T> {
        return Rx.Observable.create(fun(obs: dynamic) {
            window.cpAPIEventEmitter.addEventListener(dataCpEvent.value, fun(event: dynamic) {
                obs.next(event.Data)
            }, itemName)
        })
    }
}