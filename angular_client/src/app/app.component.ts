import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';


const FETCH_NOTES = gql`
{
  fetchNotes {
    id
    title
    body
  }
}
`;


interface Note {
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'KhalGraphQL';
  notes: Note[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.watchQuery({
      query: FETCH_NOTES,
    }).valueChanges.subscribe((result: any) => {
      console.log(result)
      this.notes = result?.data?.fetchNotes;
      this.loading = result.loading;
      this.error = result.error
    })
  }

}
