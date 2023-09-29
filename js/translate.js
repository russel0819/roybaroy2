function googleTranslateElementInit(){
    new google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'en,tl', // Specify the languages you want to include (English and Tagalog)
      },
      'google_translate_element'
    );
  }