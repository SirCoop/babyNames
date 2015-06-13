/**
 * Created by Sir_Coop on 6/12/2015.
 */
'use strict';

app.value('gridConfig',
    {
        paginationPageSizes: [5000, 10000, 20000],
        paginationPageSize: 5000,
        flatEntityAccess: true,
        infiniteScrollRowsFromEnd: 2000,
        infiniteScrollUp: true,
        infiniteScrollDown: true,
        fastWatch: true,
        columnDefs: [
            { field: 'year', displayName: 'BirthYear', width: "*", resizable: false},
            { field: 'name', displayName: 'First Name', width: "20%" },
            { field: 'gender', displayName: 'Gender', width: "**" },
            { field: 'quantity', displayName: 'Babies given name', width: "**"}
        ]
    }
);