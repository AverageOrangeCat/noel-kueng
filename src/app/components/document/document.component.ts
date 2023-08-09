import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-document',
  templateUrl: './document.component.html',
  styleUrls: [ './document.component.scss' ]
})
export class DocumentComponent implements OnInit {
  @Input()
  href: string = '';
  style: string[] = ['color-normal'];
  document_content_id: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initDocumentContent();
    this.loadText();
  }

  initDocumentContent(): void {
    const document_contents = document.querySelectorAll('[document-content]:not([id])');
    document_contents[0].id = `code-content-${document_contents.length}`;
    this.document_content_id = `code-content-${document_contents.length}`;
  }

  loadText(): void {
    const document_content: any = document.getElementById(this.document_content_id);

    this.http.get(this.href, { responseType: 'text' as 'json'}).subscribe(
      data => {
        document_content.innerHTML = data;
        document_content.setAttribute('style', `height:${document_content.scrollHeight}px`);
      }, 
      error => {
        document_content.innerHTML = 'Couldn\'t be loaded';
        document_content.setAttribute('style', `height:${document_content.scrollHeight}px`);
      }
    );
  }

}
