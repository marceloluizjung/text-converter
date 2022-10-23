import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('inputText')
  public inputText: ElementRef;

  @ViewChild('outText')
  public outText: ElementRef;

  public convertText() {
    let outText = "";
    if (this.inputText.nativeElement.value) {
      outText = this.parseTextToUnicode(this.inputText.nativeElement.value);
    }
    this.outText.nativeElement.value = outText;
  }

  public parseTextToUnicode(inputText: String) {
    let unicodeString = "";
    for (var i = 0; i < inputText.length; i++) {
      const regex = /[A-Za-z ]/g;
      let theUnicode: any = inputText[i].match(regex);
      if (!theUnicode) {
        theUnicode = inputText.charCodeAt(i).toString(16).toUpperCase();
        while (theUnicode.length < 4) {
          theUnicode = '0' + theUnicode;
        }
        theUnicode = '\\u' + theUnicode;
        unicodeString += theUnicode;
      } else unicodeString += inputText[i];
    }
    return unicodeString;
  }
}
