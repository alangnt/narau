import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hiragana',
    templateUrl: 'hiragana.page.html', 
    styleUrl: '../../../styles/kana.scss',
    imports: [RouterOutlet, RouterLink, CommonModule],
    standalone: true,
  })
  export class HiraganaPage {
    title = 'hiragana';
    hiragana = {
      "あ": "a",
      "い": "i",
      "う": "u",
      "え": "e",
      "お": "o",
      "か": "ka",
      "き": "ki",
      "く": "ku",
      "け": "ke",
      "こ": "ko",
      "さ": "sa",
      "し": "shi",
      "す": "su",
      "せ": "se",
      "そ": "so",
      "た": "ta",
      "ち": "chi",
      "つ": "tsu",
      "て": "te",
      "と": "to",
      "な": "na",
      "に": "ni",
      "ぬ": "nu",
      "ね": "ne",
      "の": "no",
      "は": "ha",
      "ひ": "hi",
      "ふ": "hu",
      "へ": "he",
      "ほ": "ho",
      "ま": "ma",
      "み": "mi",
      "む": "mu",
      "め": "me",
      "も": "mo",
      "や": "ya",
      "hide1": "",
      "ゆ": "yu",
      "hide2": "",
      "よ": "yo",
      "ら": "ra",
      "り": "ri",
      "る": "ru",
      "れ": "re",
      "ろ": "ro",
      "わ": "wa",
      "hide3": "",
      "hide4": "",
      "hide5": "",
      "を": "wo",
      "ん": "n",
    }
  
    getHiraganaEntries() {
      return Object.entries(this.hiragana).map(([key, value]) => ({ key, value }));
    }
  }  