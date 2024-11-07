import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-katakana',
    templateUrl: 'katakana.page.html', 
    styleUrl: '../../../styles/kana.scss',
    imports: [RouterOutlet, RouterLink, CommonModule],
    standalone: true,
  })
  export class KatakanaPage {
    title = 'katakana';
    katakana = {
      "ア": "a",
      "イ": "i",
      "ウ": "u",
      "エ": "e",
      "オ": "o",
      "カ": "ka",
      "キ": "ki",
      "ク": "ku",
      "ケ": "ke",
      "コ": "ko",
      "サ": "sa",
      "シ": "shi",
      "ス": "su",
      "セ": "se",
      "ソ": "so",
      "タ": "ta",
      "チ": "chi",
      "ツ": "tsu",
      "テ": "te",
      "ト": "to",
      "ナ": "na",
      "ニ": "ni",
      "ヌ": "nu",
      "ネ": "ne",
      "ノ": "no",
      "ハ": "ha",
      "ヒ": "hi",
      "フ": "hu",
      "ヘ": "he",
      "ホ": "ho",
      "マ": "ma",
      "ミ": "mi",
      "ム": "mu",
      "メ": "me",
      "モ": "mo",
      "ヤ": "ya",
      "hide1": "",
      "ユ": "yu",
      "hide2": "",
      "ヨ": "yo",
      "ラ": "ra",
      "リ": "ri",
      "ル": "ru",
      "レ": "re",
      "ロ": "ro",
      "ワ": "wa",
      "hide3": "",
      "hide4": "",
      "hide5": "",
      "ヲ": "wo",
      "ン": "n",
    }
  
    getKatakanaEntries() {
      return Object.entries(this.katakana).map(([key, value]) => ({ key, value }));
    }
  }  