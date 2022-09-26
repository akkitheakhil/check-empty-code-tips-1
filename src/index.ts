import { isEmptyData } from './utils/is-empty';
const formBang: HTMLFormElement = document.querySelector("form#bang");
const inputBang: HTMLInputElement = document.querySelector("input#level-input-bang");
const errorBang: HTMLSpanElement = document.querySelector("span.error-bang");
const successBang: HTMLSpanElement = document.querySelector("span.success-bang");

const formUtil: HTMLFormElement = document.querySelector("form#util");
const inputUtil: HTMLInputElement = document.querySelector("input#level-input-util");
const errorUtil: HTMLSpanElement = document.querySelector("span.error-util");
const successUtil: HTMLSpanElement = document.querySelector("span.success-util");


const SOFTWARE_ENGINEER_LEVEL_MAP: Record<number, string> = {
    0: "Junior Software Engineer",
    1: "Software Engineer",
    2: "Senior Software Engineer",
    3: "Staff Engineer",
    4: "Principal Engineer",
    5: "Software architect"
}

formBang.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    successBang.textContent = "";
    errorBang.textContent = "";
    const softwareEngineerLevel: number = inputBang.valueAsNumber;

    if (!softwareEngineerLevel) {
        errorBang.textContent = 'Please enter a value';
        return;
    }

    if (softwareEngineerLevel >= 0 && softwareEngineerLevel <= 5) {
        const title = SOFTWARE_ENGINEER_LEVEL_MAP[softwareEngineerLevel];
        successBang.textContent = `Your title is ${title}`
    }
});



formUtil.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    errorUtil.textContent = "";
    successUtil.textContent = "";
    const softwareEngineerLevel: number = inputUtil.valueAsNumber;

    if (isEmptyData(softwareEngineerLevel)) {
        errorUtil.textContent = 'Please enter a value from 0 - 5';
        return;
    }

    if (softwareEngineerLevel >= 0 && softwareEngineerLevel <= 5) {
        const title = SOFTWARE_ENGINEER_LEVEL_MAP[softwareEngineerLevel];
        successUtil.textContent = `Your title is ${title}`
    }
});



