//import {} from "../src/game";
const React= require('react');//Reach yazdığim için 2 saatim gitti TY js
const {mount}= require('enzyme');
const {Game}= require('../src/client/game');

//alınacaklar alındı

const checkQuizIsDisplayed = (driver) =>{
    const questions = driver.find('.question');
    expect(questions.length).toEqual(1);
}

test("test oluşturuldu",()=>{
    const driver = mount(<Game/>);
    checkQuizIsDisplayed(driver);
});

test("cevap ver testi", () => {
    const driver = mount(<Game/>);


    let msg = undefined;

    global.alert = (s) => {msg = s};

    const first = driver.find('.answer').at(3);
    first.simulate('click');

    checkQuizIsDisplayed(driver);
    expect(msg).toBeDefined();
})

test("çoklu test", () => {
    let driver = mount(<Game/>);


    let msg = undefined;

    global.alert = (s) => {msg = s};

    for(let i=0;i<20;i++){

        const first = driver.find('.answer').at(3);
        first.simulate('click');

        checkQuizIsDisplayed(driver);
        expect(msg).toBeDefined();
        msg = undefined;
        driver = mount(<Game/>);

    }
})