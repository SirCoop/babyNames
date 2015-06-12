/**
 * Created by Sir_Coop on 6/12/2015.
 */
'use strict';

app.value('gridConfig',
    {
        paginationPageSizes: [250, 500, 1000],
        paginationPageSize: 250,
        columnDefs: [
            { field: 'year', displayName: 'BirthYear', width: "*", resizable: false},
            { field: 'name', displayName: 'First Name', width: "20%" },
            { field: 'gender', displayName: 'Gender', width: "**" },
            { field: 'quantity', displayName: 'Babies given name', width: "**"}
        ]
    }
);