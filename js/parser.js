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
                             for (var row_num=0; row_num<data.length; row_num++){
                                 filename = data[row_num].filename;
                                 totalErrors = data[row_num].failure_list.length;
                                 totalWarnings = data[row_num].warning_list == null ? "No Warnings" : data[row_num].warning_list.length;

                                 $('.limiter tbody').append('<tr class="row100" id="' + filename + '"><td class="column100 column1" data-column="column1">' + filename +
                                 '</td><td class="column100 column2" data-column="column2"><a href="#summary">' + totalErrors +
                                 '</a></td><td class="column100 column3" data-column="column3">' + totalWarnings +
                                 '</td></tr>');
                             }
                        }
                    })

                    $('.limiter tbody').on('click', 'tr', function(){
                        
                        $("#files").val(this.id)
                        $("#files").trigger("change")
                        var targetOffset = $(errors).offset().top - 50
                        $('html,body').animate({ scrollTop: targetOffset }, 100);
                    })

                    // $(function(){
                    //     function yourfunction(event) {
                    //         $("#files").val(this.id)
                    //         $("#files").trigger("change")
                    //         var targetOffset = $(errors).offset().top - 50
                    //         $('html,body').animate({ scrollTop: targetOffset }, 300);
                    //         return '#files' 
                    //     }
                    //     $('a.anchorclass').click(yourfunction);
                    // });
                    
                    $('#errors').pagination({
                        dataSource: detailedFailures,
                        pageSize: 8,
                        className: 'paginationjs-theme-red',
                        callback: function(data, pagination) {
                             $('.limiter1 tbody').empty();
                             $('#lightbox-det').empty();

                              table_det = "<table class='lightbox-err'><tr><th style='font-weight: bold'>Serial Number</th><th style='font-weight: bold'>Git Commmit SHA</th></tr>";
                              for (var row_num=0; row_num<data.length; row_num++){
                                var commit_table = "";
                                filename = data[row_num].filename;

                                 for(var failure_num=0; failure_num<data[row_num].failure_list.length; failure_num++){
                                   errorType = data[row_num].failure_list[failure_num].type;
                                   errorMessage = data[row_num].failure_list[failure_num].message;
                                   commitIDs = data[row_num].failure_list[failure_num].commits;
                                 }

                                 $('.limiter1 tbody').append('<tr class="row100"><td class="column100 column1" data-column="column1">' + filename +
                                 '</td><td class="column100 column2" data-column="column2">' + errorType +
                                 '</td><td class="column100 column3" data-column="column3"><div>' + errorMessage +
                                 '</div></td><td class="column100 column4" data-column="column4"><a href="#" data-featherlight="#commit-details-' + row_num + '">' + commitIDs.length +
                                 '</a></td></tr>');
                                 var commit_table = "";
                                 for(var commitID_row_index=0; commitID_row_index<commitIDs.length; commitID_row_index++){
                                   commit_table = commit_table.concat('<tr><td>' + (commitID_row_index+1) + '</td><td>' + commitIDs[commitID_row_index] + '</td></tr>');
                                 }

                                 $('#lightbox-det').append('<div id="commit-details-' + row_num +'"> '+ table_det + commit_table + '</table></div>');
                             }
                        }
                    })

                     // Populate drop down
                      var dropdownFiles = document.getElementById("files");
                      for (var row_num=0; row_num<detailedFailures.length; row_num++){
                        var option = document.createElement("option");
                        filename = detailedFailures[row_num].filename;
                        option.text = filename;
                        option.setAttribute("id", filename);
                        console.log(option);
                        dropdownFiles.add(option);
                        }
               });
         });

         
