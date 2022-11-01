import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-unicode-text-converter',
  templateUrl: './page-unicode-text-converter.component.html',
  styleUrls: ['./page-unicode-text-converter.component.scss'],
})
export class PageUnicodeTextConverterComponent {
  @ViewChild('inputText')
  public inputText: ElementRef;

  @ViewChild('outText')
  public outText: ElementRef;

  private regex = "[A-Za-z]";

  public textConverterFormGroup: FormGroup = this.formBuilder.group({
    regex: [this.regex],
  });

  constructor(private formBuilder: FormBuilder) {}

  public convertText() {
    let outText = '';
    if (this.inputText.nativeElement.value) {
      outText = this.parseTextToUnicode(this.inputText.nativeElement.value);
    }
    this.outText.nativeElement.value = outText;
  }

  public parseTextToUnicode(inputText: String) {
    let unicodeString = '';
    for (var i = 0; i < inputText.length; i++) {
      let theUnicode: any = inputText[i].match(new RegExp(this.textConverterFormGroup.controls['regex'].value));
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
