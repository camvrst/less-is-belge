import $ from 'jquery';
// import 'airtable/build/airtable.browser';
import './style.scss';
// import {postedComments} from './src/view/view'
import { header, footer } from './src/view/view';

/* INCLUDE HEADER AND FOOTER */
const headerHTML = document.querySelector('header');
const footerHTML = document.querySelector('footer.footer');

headerHTML.innerHTML = header;
footerHTML.innerHTML = footer;

// ***** NAV BAR ANIMATION ON CLICK RESPONSIVE ***** //

const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burgerMenu.classList.toggle('toggle');
});

/*

// COMMENTS AIRTABLE

AIRTABLE CONFIGURE TO ADD (API KEY SECRET)

// CREATE COMMENTS

base('Comments').create([
    {
      "fields": {
        "Nom": "Ayaan",
        "Commentaire": "Génial"
      }
    },
    {
      "fields": {
        "Nom": "Loic",
        "Commentaire": "Top"
      }
    }
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  });


// READ THE COMMENTS 

const msgName = [];
const comment = [];

base('Comments').select({
  // Selecting the first 3 records in Grid view:
  maxRecords: 4,
  view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.

  records.forEach(function(record) {
      msgName.push(record.get('Nom'));
      console.log('Retrieved the name', msgName);
      comment.push(record.get('Commentaire'));
      console.log('Retrieved the comment', comment);
  });

  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});

base('Comments').find('recO6kYtLskcA3J8G', function(err, record) {
  if (err) { console.error(err); return; }
  console.log('Retrieved the id', record.id);
});


// UPDATE COMMENTS



// DELETE COMMENTS

/*
base('Comments').destroy(['recO6kYtLskcA3J8G', 'recgMjff54KBWkl08'], function(err, deletedRecords) {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Deleted', deletedRecords.length, 'records');
  });
*/


// POSTED COMMENTS DOM
/*
const sectionCommentaire = document.querySelector('section.posted-comments');

for (i = 0; i < msgName.length; i++) {
  sectionCommentaire.innerHTML += `
    <div class="w-full d-flex items-center comment">
        <div>
            <i class="fas fa-star-of-life"></i>
        </div>
        <div>
            <h4>${msgName[i]}</h4>
            <p>${comment[i]}</p>
        </div>
    </div>
  `
}
*/