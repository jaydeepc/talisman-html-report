         $(document).ready(function() {

    // Number of total records
    // Page size
    // page number


               $.getJSON('../data/report.json', function(jd) {
                    total_filecontent = jd.summary.types.filecontent || 0;
                    total_filesize = jd.summary.types.filesize || 0;
                    total_filename = jd.summary.types.filename || 0;

                    $('.pricing-table .price .green')
                        .append('<p><span></span>' + total_filecontent + '</p>');
                    $('.pricing-table .price .red')
                        .append('<p><span></span>' + total_filesize + '</p>');
                    $('.pricing-table .price .yellow')
                        .append('<p><span></span>' + total_filename + '</p>');

                    var filename;
                    var totalErrors;
                    var totalWarnings;
                    var commitIDs;

                    var detailedFailures = jd.results;

                    var totalRecords=detailedFailures.length;
                    var pageSize = 5;
                    var pageNumber = 1;

                    $('#detailed-report').pagination({
                        dataSource: detailedFailures,
                        pageSize: 8,
                        className: 'paginationjs-theme-red',
                        callback: function(data, pagination) {
                             $('.limiter tbody').empty();
                             table_det = "<table class='lightbox-err'><tr><th style='font-weight: bold'>Serial Number</th><th style='font-weight: bold'>Git Commmit SHA</th></tr>";
                             for (var i=0; i<data.length; i++){
                                 var commit_table = "";
                                 filename = data[i].filename;
                                 totalErrors = data[i].failure_list.length;
                                 totalWarnings = data[i].warning_list == null ? "No Warnings" : data[i].warning_list.length;
                                 for(var j=0; j<data[i].failure_list.length; j++){
                                   commitIDs = data[i].failure_list[j].commits;
                                 }

                                 $('.limiter tbody').append('<tr class="row100"><td class="column100 column1" data-column="column1">' + filename +
                                 '</td><td class="column100 column2" data-column="column2">' + totalErrors +
                                 '</td><td class="column100 column3" data-column="column3">' + totalWarnings +
                                 '</td><td class="column100 column4" data-column="column4"><a href="#" data-featherlight="#commit-details-' + i + '">' + commitIDs.length +
                                 '</a></td></tr>');

                                 for(var k=0; k<commitIDs.length; k++){
                                   commit_table = commit_table.concat('<tr><td>' + k + '</td><td>' + commitIDs[k] + '</td></tr>');
                                 }



                                 $('#lightbox-det').append('<div id="commit-details-' + i +'">' + table_det + commit_table + '</table></div>');
                             }
                        }
                    })

                 // for (var i=pageNumber-1*PageSize; i<pageNumber-1*PageSize; i++){
                 //    for (var i=(pageNumber-1)*pageSize; i<pageNumber*pageSize; i++){
                 //        var b = "";
                 //        filename = detailedFailures[i].filename;
                 //        totalErrors = detailedFailures[i].failure_list.length;
                 //        totalWarnings = detailedFailures[i].warning_list == null ? "No Warnings" : detailedFailures[i].warning_list.length;
                 //        for(var j=0; j<detailedFailures[i].failure_list.length; j++){
                 //          commitIDs = detailedFailures[i].failure_list[j].commits;
                 //        }
                 //
                 //        $('.limiter tbody').append('<tr class="row100"><td class="column100 column1" data-column="column1">' + filename +
                 //        '</td><td class="column100 column2" data-column="column2">' + totalErrors +
                 //        '</td><td class="column100 column3" data-column="column3">' + totalWarnings +
                 //        '</td><td class="column100 column4" data-column="column4"><a href="#" data-featherlight="#commit-details-' + 1 + '">' + commitIDs.length +
                 //        '</a></td></tr>');
                 //

                 //        $('#lightbox').append('<div id="commit-details-' + 1 +'">' + b + '</div>');
                 //
                 //    }

               });

         });
