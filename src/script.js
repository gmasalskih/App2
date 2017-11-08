regExpMap = new Map([
    ["q1_1_", new RegExp(`^1234445678900$`)],
    ["q1_2_", new RegExp(`^12$`)],
    ["q1_3_", new RegExp(`^20$`)],
    ["q2_1_", new RegExp(`^((Ващенко)|(ВАЩЕНКО))$`)],
    ["q2_2_", new RegExp(`^((Иван)|(ИВАН))$`)],
    ["q2_3_", new RegExp(`^((Иванович)|(ИВАНОВИЧ))$`)],
    ["q2_4_", true],
    ["q2_5_", false],
    ["q2_6_", new RegExp(`^(10.10.1982)$`)],
    ["q2_7_", new RegExp(`^((г)|(ГОР)|([Гг]ор)|([Гг]ород)|(ГОРОД))[., ][ ]*((Рубцовск)|(РУБЦОВСК))$`)],
    ["q2_8_", new RegExp(`^РФ$`)],
    ["q2_9_", false],
    ["q2_10_", true],
    ["q2_11_", new RegExp(`^[0]?$`)],
    ["q2_12_", new RegExp(`^[0]?$`)],
    ["q2_13_", new RegExp(`^((14323685721)|([0]?))$`)],
    ["q2_14_", false],
    ["q2_15_", true],
    ["q3_1_", new RegExp(`^1118$`)],
    ["q3_2_", new RegExp(`^130643$`)],
    ["q3_3_", new RegExp(`^((ТП[ ]*ОУФМС[ ]*России[ ]*по[ ]*Алтайскому[ ]*краю[ ]*в[ ]*Рубцовском[ ]*районе)|(ТП[ ]*ОУФМС[ ]*РОССИИ[ ]*ПО[ ]*АЛТАЙСКОМУ[ ]*КРАЮ[ ]*В[ ]*РУБЦОВСКОМ[ ]*РАЙОНЕ))$`)],
    ["q3_4_", new RegExp(`^(29[.,]02[.,]2008)$`)],
    ["q3_5_", new RegExp(`^220-044$`)],
    ["q4_1_", new RegExp(`^Россия$`)],
    ["q4_2_", new RegExp(`^((658200)|([0]?))$`)],
    ["q4_3_", new RegExp(`^((Алтайский край)|(АЛТАЙСКИЙ КРАЙ)|([0]?))$`)],
    ["q4_4_", new RegExp(`^((Рубцовский)|(РУБЦОВСКИЙ)|([0]?))$`)],
    ["q4_5_", new RegExp(`^((Рубцовск)|(РУБЦОВСК))$`)],
    ["q4_6_", new RegExp(`^[0]?$`)],
    ["q4_7_", new RegExp(`^((Октябрьская)|(ОКТЯБРЬСКАЯ))$`)],
    ["q4_8_", new RegExp(`^[0]?$`)],
    ["q4_9_", new RegExp(`^511$`)],
    ["q4_10_", new RegExp(`^[0]?$`)],
    ["q4_11_", new RegExp(`^5$`)],
    ["q4_12_", new RegExp(`^(((([Сс]выше)|([Бб]олее)) пяти лет)|(((СВЫШЕ)|(БОЛЕЕ)) ПЯТИ ЛЕТ)|((([Сс]выше)|([Бб]олее)) 5[-]?[т]?[и]? лет)|(((СВЫШЕ)|(БОЛЕЕ)) 5[-]?[Т]?[И]? ЛЕТ))$`)],
    ["q5_1_", new RegExp(`^((Россия)|(РОССИЯ))$`)],
    ["q5_2_", new RegExp(`^((129137)|([0]?))$`)],
    ["q5_3_", new RegExp(`^[0]?$`)],
    ["q5_4_", new RegExp(`^[0]?$`)],
    ["q5_5_", new RegExp(`^((Москва)|(МОСКВА))$`)],
    ["q5_6_", new RegExp(`^[0]?$`)],
    ["q5_7_", new RegExp(`^((Красная)|(КРАСНАЯ))$`)],
    ["q5_8_", new RegExp(`^[0]?$`)],
    ["q5_9_", new RegExp(`^18$`)],
    ["q5_10_", new RegExp(`^[0]?$`)],
    ["q5_11_", new RegExp(`^36$`)],
    ["q5_12_", new RegExp(`^(([Дд]о года)|(ДО ГОДА)|([Дд]о ((1(-)?го)|(одного)) года)|(ДО ((1(-)?ГО)|(ОДНОГО)) ГОДА))$`)],
    ["q6_1_", new RegExp(`^[0]?$`)],
    ["q6_2_", new RegExp(`^9071112233$`)],
    ["q6_3_", new RegExp(`^[0]?$`)],
    ["q7_1_", new RegExp(`^(РАСКОВАЛОВА)$`, "i")],
    ["q8_1_", false],
    ["q8_2_", true],
    ["q8_3_", new RegExp(`^[0]?$`)],
    ["q8_4_", new RegExp(`^[0]?$`)],
    ["q8_5_", new RegExp(`^[0]?$`)],
    ["q8_6_", new RegExp(`^[0]?$`)],
    ["q8_7_", false],
    ["q8_8_", true],
    ["q8_9_", new RegExp(`^[0]?$`)],
    ["q8_10_", new RegExp(`^[0]?$`)],
    ["q8_11_", new RegExp(`^[0]?$`)],
    ["q8_12_", new RegExp(`^[0]?$`)],
    ["q8_13_", new RegExp(`^((Ващенко)|(ВАЩЕНКО))[ ]((Иван)|(ИВАН))[ ]((Иванович)|(ИВАНОВИЧ))$`)],
    ["q8_14_", true],
    ["q8_15_", (() => {
        let arr = [`(([Яя]нваря)|(01)|(1))`,
            `(([Фф]евраля)|(02)|(2))`,
            `(([Мм]арта)|(03)|(3))`,
            `(([Аа]преля)|(04)|(4))`,
            `(([Мм]ая)|(05)|(5))`,
            `(([Ии]юня)|(06)|(6))`,
            `(([Ии]юля)|(07)|(7))`,
            `(([Аа]вгуста)|(08)|(8))`,
            `(([Сс]ентября)|(09)|(9))`,
            `(([Оо]ктября)|(10))`,
            `(([Нн]оября)|(11))`,
            `(([Дд]екабря)|(12))`];
        return new RegExp(`^[0]?(${new Date().getDate()}[., ]${arr[new Date().getMonth()]}[., ]${(new Date().getFullYear() + "")})$`)
    })()],
    ["q9_1_", new RegExp(`^((Ващенко)|(ВАЩЕНКО))[ ]((Иван)|(ИВАН))[ ]((Иванович)|(ИВАНОВИЧ))$`)],
    ["q9_2_", true],
    ["q9_3_", (() => {
        let arr = [`(([Яя]нваря)|(01)|(1))`,
            `(([Фф]евраля)|(02)|(2))`,
            `(([Мм]арта)|(03)|(3))`,
            `(([Аа]преля)|(04)|(4))`,
            `(([Мм]ая)|(05)|(5))`,
            `(([Ии]юня)|(06)|(6))`,
            `(([Ии]юля)|(07)|(7))`,
            `(([Аа]вгуста)|(08)|(8))`,
            `(([Сс]ентября)|(09)|(9))`,
            `(([Оо]ктября)|(10))`,
            `(([Нн]оября)|(11))`,
            `(([Дд]екабря)|(12))`];
        return new RegExp(`^[0]?(${new Date().getDate()}[., ]${arr[new Date().getMonth()]}[., ]${(new Date().getFullYear() + "")})$`)
    })()],
    ["q9_4_", new RegExp(`^(${new Date().getDate()})$`)],
    ["q9_5_", (() => {
        let arr = [new RegExp(`^(([Яя]нваря)|(01)|(1))$`),
            new RegExp(`^(([Фф]евраля)|(02)|(2))$`),
            new RegExp(`^(([Мм]арта)|(03)|(3))$`),
            new RegExp(`^(([Аа]преля)|(04)|(4))$`),
            new RegExp(`^(([Мм]ая)|(05)|(5))$`),
            new RegExp(`^(([Ии]юня)|(06)|(6))$`),
            new RegExp(`^(([Ии]юля)|(07)|(7))$`),
            new RegExp(`^(([Аа]вгуста)|(08)|(8))$`),
            new RegExp(`^(([Сс]ентября)|(09)|(9))$`),
            new RegExp(`^(([Оо]ктября)|(10))$`),
            new RegExp(`^(([Нн]оября)|(11))$`),
            new RegExp(`^(([Дд]екабря)|(12))$`)];
        return arr[new Date().getMonth()];
    })()],
    ["q9_6_", new RegExp(`^(${(new Date().getFullYear() + "").slice(-2)})$`)],
    ["q9_7_", new RegExp(`^(([0,1][0-9])|(2[0-3]))$`)],
    ["q9_8_", new RegExp(`^[0-5]?[0-9]$`)],
    ["q9_9_", new RegExp(`^[А-Я][а-я]+ [А-Я][., ][ ]?[А-Я][.,]$`)],
    ["q9_10_", true],
]);

class EntryField {
    constructor(name, varName, regExp) {
        this.name = name;
        this.varName = varName;
        this.regExp = regExp;
        this.nameSS = this.name + "SS";
    }

    isCorrect() {
        if (eval(this.varName).toString().search(this.regExp) !== -1) {
            cp.changeState(this.nameSS, "Normal");
            return true;
        } else {
            cp.changeState(this.nameSS, "Red");
            return false;
        }
    }
}

class CheckBox {
    constructor(name, regExp) {
        this.name = name;
        this.regExp = regExp;
        this.check = false;
        this.nameSS = this.name + "SS";
    }

    toggleCheck() {
        this.check = !this.check;
        if (this.check) {
            cp.changeState(this.name, "Check");
        } else {
            cp.changeState(this.name, "Normal");
        }
    }

    isCorrect() {
        if (this.regExp === this.check) {
            cp.changeState(this.nameSS, "Normal");
            return true;
        } else {
            cp.changeState(this.nameSS, "Red");
            return false;
        }
    }
}

class Quest {
    constructor(slideName) {
        this.arr = [];
        mycp.getTextEntryBoxsOnSlide(slideName)
            .filter(item => {
                return item.name.search(new RegExp("_$", "g")) !== -1;
            })
            .forEach(item => {
                this.arr.push(new EntryField(item.name, item.varName, regExpMap.get(item.name)));
            });
        mycp.getItemsOnSlide(slideName)
            .filter(item => {
                return item.name.search(new RegExp("_$", "g")) !== -1;
            })
            .forEach(item => {
                this.arr.push(new CheckBox(item.name, regExpMap.get(item.name)));
            });
    }

    check() {
        this.arr.forEach(item => {
            item.isCorrect();
        });
        return this.arr.every(item => {
            return item.isCorrect();
        });
    }

    checkQuest() {
        if (this.check()) {
            errMsg = "";
            cp.goToNextSlide();
        } else {
            errMsg = `Поля анкеты заполнены с ошибками или не заполнены обязательные поля. После исправления всех ошибок повторно нажмите на кнопку «Далее».`;
        }
    }

    clickToCheckBox(label) {
        this.arr.find(item => {
            return item.name === label;
        }).toggleCheck();
    }

}

quest1 = new Quest("Первое задание");
quest2 = new Quest("Второе задание");
quest3 = new Quest("Третье задание");


DDD1 = Rx.Observable.create(function (obs) {
    window.cpAPIEventEmitter.addEventListener("CPAPI_INTERACTIVEITEMSUBMIT", function (event) {
        obs.next(event);
    });
});
DDD1.subscribe(x => console.log(x));

DDD1 = Rx.Observable.create(function (obs) {
    window.cpAPIEventEmitter.addEventListener("CPAPI_SLIDEENTER", function (event) {
        for (var i = 0; i < App.Data.slides.toArray().length; i++) {
            if (App.Data.slides.toArray()[i].id == event.cpData.id) {
                obs.next(App.Data.slides.toArray()[i]);
                break;
            }
        }
    });
});

DDD1.subscribe(x => console.log(x));

DDD1 = Rx.Observable.create(function (obs) {
    window.cpAPIEventEmitter.addEventListener("CPAPI_VARIABLEVALUECHANGED", function (event) {
        obs.next(event);
    }, "ssss");
});

DDD1.subscribe(x => console.log(x));


DDD1 = Rx.Observable.create(function (obs) {
    window.cpAPIEventEmitter.addEventListener("CPAPI_SLIDEEXIT", function (event) {
        for (var i = 0; i < App.Data.slides.toArray().length; i++) {
            if (App.Data.slides.toArray()[i].id == event.cpData.id) {
                obs.next(App.Data.slides.toArray()[i]);
                break;
            }
        }
    });
});

DDD1.subscribe(x => console.log(x));

function cpev (cp) {
    DDD1 = Rx.Observable.create(function (obs) {
        window.cpAPIEventEmitter.addEventListener(cp, function (event) {
            obs.next(event);
        });
    });
    DDD1.subscribe(x => console.log(x));
}

DDD1 = Rx.Observable.create(function (obs) {
    window.cpAPIEventEmitter.addEventListener("CPAPI_VARIABLEVALUECHANGED", function (event) {
        obs.next(event);
    });
});
DDD1.subscribe(x => console.log(x));



