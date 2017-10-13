~~* change SESSION_REMOVE to session reset, which just clears non-view mode props? dispatch view mode action separately?~~
~~* instead of session reducer responding to RESULT_CREATE, should a second view mode action be dispatched?~~
~~* change SESSION_NEXT_QUESTION to session question increment?~~
~~* session reducer, on result create, how to null current question?~~
~~* pass guid to RESULT_CREATE instead of incrementing ids. use a thunk to generate guid and then call action~~
~~* result session view~~
~~* leaderboard component~~

* save data in local storage