import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { XIcon } from "../../components/lucide.component"

@Component ({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    imports: [RouterOutlet, RouterLink, CommonModule, XIcon, FormsModule],
    standalone: true,
})
export class HomePage {
    title = 'home';

    heroUrl = '/hero.png'
    heroAlt = 'Hero Image'

    showMenu = false;

    toggleMenu() {
        window.scrollTo(0, 0);
        this.showMenu = true
    }

    kana = Object.fromEntries([
        ["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"],
        ["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"],
        ["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"],
        ["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"],
        ["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"],
        ["は", "ha"], ["ひ", "hi"], ["ふ", "hu"], ["へ", "he"], ["ほ", "ho"],
        ["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"],
        ["や", "ya"], ["ゆ", "yu"], ["よ", "yo"], ["ら", "ra"], ["り", "ri"],
        ["る", "ru"], ["れ", "re"], ["ろ", "ro"], ["わ", "wa"], ["を", "wo"],
        ["ん", "n"], ["ア", "a"], ["イ", "i"], ["ウ", "u"], ["エ", "e"], ["オ", "o"],
        ["カ", "ka"], ["キ", "ki"], ["ク", "ku"], ["ケ", "ke"], ["コ", "ko"],
        ["サ", "sa"], ["シ", "shi"], ["ス", "su"], ["セ", "se"], ["ソ", "so"],
        ["タ", "ta"], ["チ", "chi"], ["ツ", "tsu"], ["テ", "te"], ["ト", "to"],
        ["ナ", "na"], ["ニ", "ni"], ["ヌ", "nu"], ["ネ", "ne"], ["ノ", "no"],
        ["ハ", "ha"], ["ヒ", "hi"], ["フ", "hu"], ["ヘ", "he"], ["ホ", "ho"],
        ["マ", "ma"], ["ミ", "mi"], ["ム", "mu"], ["メ", "me"], ["モ", "mo"],
        ["ヤ", "ya"], ["ユ", "yu"], ["ヨ", "yo"], ["ラ", "ra"], ["リ", "ri"],
        ["ル", "ru"], ["レ", "re"], ["ロ", "ro"], ["ワ", "wa"], ["ヲ", "wo"],
        ["ン", "n"],
    ]);

    randomKana: (keyof typeof this.kana) = Object.keys(this.kana)[Math.floor(Math.random() * Object.keys(this.kana).length)] as keyof typeof this.kana;
    correctKana = this.kana[this.randomKana]

    trainingSteps = signal<number>(0)
    correctAns = 0

    myChoice = "bg-white"

    choices: string[] = [];
    ngOnInit() {
        const correctAnswer = this.kana[this.randomKana];
        const allKanaKeys = Object.keys(this.kana);
        const randomChoices = new Set<string>();

        randomChoices.add(correctAnswer);

        while (randomChoices.size < 4) {
        const randomKana = allKanaKeys[Math.floor(Math.random() * allKanaKeys.length)];
        randomChoices.add(this.kana[randomKana]);
        }

        this.choices = Array.from(randomChoices);
        this.shuffleChoices();
    }

    shuffleChoices() {
        this.choices.sort(() => Math.random() - 0.5); 
    }

    clickKana(choiceId: string) {
        this.myChoice = choiceId
        if (this.trainingSteps() === 9) {
        setTimeout(() => {
            this.trainingSteps.update(c => c + 1)
        }, 1000)
        } else {
        this.trainingSteps.update(c => c + 1)
        }
        
        if (choiceId === this.correctKana) {
        this.correctAns++
        this.myChoice = 'bg-green-500';
        } else {
        this.myChoice = 'bg-red-500';
        }

        setTimeout(() => {
        this.nextKana()
        }, 1000)
    }

    nextKana() {
        this.myChoice = "bg-white"
        this.randomKana = Object.keys(this.kana)[Math.floor(Math.random() * Object.keys(this.kana).length)] as keyof typeof this.kana;
        this.correctKana = this.kana[this.randomKana];
        this.choices = [];
        this.ngOnInit();
    }

    startAgain() {
        this.nextKana()
        this.trainingSteps = signal<number>(0) 
        this.correctAns = 0
    }

    closeMenu() {
        this.showMenu = false
        this.startAgain()
    }
}