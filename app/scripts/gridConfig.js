/**
 * Created by Sir_Coop on 6/12/2015.
 */
'use strict';

app.value('gridConfig',
    {
        paginationPageSizes: [4000, 6500, 8000],
        paginationPageSize: 4000,
        flatEntityAccess: true,
        //infiniteScrollRowsFromEnd: 125,
        //infiniteScrollUp: true,
        //infiniteScrollDown: true,
        fastWatch: true,
        columnDefs: [
            { field: 'year', displayName: 'BirthYear', width: "*", resizable: false, enableFiltering: true},
            { field: 'name', displayName: 'First Name', width: "20%", enableFiltering: true },
            { field: 'gender', displayName: 'Gender', width: "**", enableFiltering: true },
            { field: 'quantity', displayName: 'Babies given name', width: "**", enableFiltering: true}
        ],
    }
);