window.repositoryObject = {"tables_custom_fields":["Table Description"],"tables":[{"id":"m1104t4805","name":"dbo.datasource_computer_groups","type":"TABLE","subtype":"SYSTEM_VERSIONED_TABLE","is_user_defined":false,"custom_fields":{"Table Description":{"value":"Database Computer Reporting","type":"TEXT"}}},{"id":"m1104t4806","name":"dbo.datasource_devices","type":"TABLE","subtype":"SYSTEM_VERSIONED_TABLE","is_user_defined":false,"custom_fields":{"Table Description":{"value":"Database Computer Reporting","type":"TEXT"}}},{"id":"m1104t4808","name":"dbo.datasource_groups","type":"TABLE","subtype":"SYSTEM_VERSIONED_TABLE","is_user_defined":false,"custom_fields":{"Table Description":{"value":"","type":"TEXT"}}},{"id":"m1104t4811","name":"dbo.datasource_sites","type":"TABLE","subtype":"SYSTEM_VERSIONED_TABLE","is_user_defined":false,"custom_fields":{"Table Description":{"value":"","type":"TEXT"}}},{"id":"m1104t4822","name":"dbo.datasources","type":"TABLE","subtype":"TABLE","is_user_defined":false,"custom_fields":{"Table Description":{"value":null,"type":"TEXT"}}},{"id":"m1104t4812","name":"dbo.device_dimensions","type":"TABLE","subtype":"SYSTEM_VERSIONED_TABLE","is_user_defined":false,"custom_fields":{"Table Description":{"value":"","type":"TEXT"}}}],"views_custom_fields":[],"views":[],"procedures_custom_fields":[],"procedures":[],"functions_custom_fields":[],"functions":[],"structures_custom_fields":[],"structures":[],"object_id":"m1104","name":"Datasource Computer Reporting","description":null,"summary":[],"erd":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"816\" height=\"395\" class=\"erd\"><defs><mask id=\"node-text-mask-4822\"><rect x=\"17\" y=\"7\" width=\"198\" height=\"10\" fill=\"#ffffff\" /></mask><mask id=\"node-text-mask-4805\"><rect x=\"17\" y=\"7\" width=\"198\" height=\"10\" fill=\"#ffffff\" /></mask><mask id=\"node-text-mask-4806\"><rect x=\"17\" y=\"7\" width=\"198\" height=\"10\" fill=\"#ffffff\" /></mask><mask id=\"node-text-mask-4812\"><rect x=\"17\" y=\"7\" width=\"198\" height=\"10\" fill=\"#ffffff\" /></mask><mask id=\"node-text-mask-4811\"><rect x=\"17\" y=\"7\" width=\"198\" height=\"10\" fill=\"#ffffff\" /></mask><mask id=\"node-text-mask-4808\"><rect x=\"17\" y=\"7\" width=\"198\" height=\"10\" fill=\"#ffffff\" /></mask></defs><g transform=\"translate(1,-11)\"><g><polyline stroke=\"#757575\" fill=\"transparent\" points=\"590, 179 570, 179 244, 182 224, 182\" /><polyline data-msg=\"dbo.datasource_computer_groups.datasource_device_id = dbo.datasource_devices.id\" data-relation=\"\" data-relation-pk-table-id=\"4806\" data-relation-fk-table-id=\"4805\" data-relation-pk-column-ids=\"36053\" data-relation-fk-column-ids=\"36046\" stroke=\"transparent\" stroke-width=\"10\" fill=\"transparent\" points=\"590, 179 570, 179 244, 182 224, 182\" /><polyline stroke=\"#757575\" fill=\"transparent\" points=\"224, 177 234, 182 224, 187\" /></g><g><polyline stroke=\"#757575\" fill=\"transparent\" points=\"590, 221 570, 221 570, 300 590, 300\" /><polyline data-msg=\"dbo.device_dimensions.datasource_device_id = dbo.datasource_devices.id\" data-relation=\"\" data-relation-pk-table-id=\"4806\" data-relation-fk-table-id=\"4812\" data-relation-pk-column-ids=\"36053\" data-relation-fk-column-ids=\"36126\" stroke=\"transparent\" stroke-width=\"10\" fill=\"transparent\" points=\"590, 221 570, 221 570, 300 590, 300\" /><polyline stroke=\"#757575\" fill=\"transparent\" points=\"590, 295 580, 300 590, 305\" /></g><g><polyline stroke=\"#757575\" fill=\"transparent\" points=\"475, 70 475, 90 700, 137 700, 157\" /><polyline data-msg=\"dbo.datasource_devices.datasource_id = dbo.datasources.id\" data-relation=\"\" data-relation-pk-table-id=\"4822\" data-relation-fk-table-id=\"4806\" data-relation-pk-column-ids=\"36199\" data-relation-fk-column-ids=\"36055\" stroke=\"transparent\" stroke-width=\"10\" fill=\"transparent\" points=\"475, 70 475, 90 700, 137 700, 157\" /><polyline stroke=\"#757575\" fill=\"transparent\" points=\"695, 157 700, 147 705, 157\" /></g><g><polyline stroke=\"#757575\" fill=\"transparent\" points=\"331, 70 331, 90 114, 103 114, 123\" /><polyline data-msg=\"dbo.datasource_computer_groups.datasource_id = dbo.datasources.id\" data-relation=\"\" data-relation-pk-table-id=\"4822\" data-relation-fk-table-id=\"4805\" data-relation-pk-column-ids=\"36199\" data-relation-fk-column-ids=\"36048\" stroke=\"transparent\" stroke-width=\"10\" fill=\"transparent\" points=\"331, 70 331, 90 114, 103 114, 123\" /><polyline stroke=\"#757575\" fill=\"transparent\" points=\"109, 123 114, 113 119, 123\" /></g><g><polyline stroke=\"#757575\" fill=\"transparent\" points=\"403, 70 403, 90 400, 287 400, 307\" /><polyline data-msg=\"dbo.datasource_sites.datasource_id = dbo.datasources.id\" data-relation=\"\" data-relation-pk-table-id=\"4822\" data-relation-fk-table-id=\"4811\" data-relation-pk-column-ids=\"36199\" data-relation-fk-column-ids=\"36115\" stroke=\"transparent\" stroke-width=\"10\" fill=\"transparent\" points=\"403, 70 403, 90 400, 287 400, 307\" /><polyline stroke=\"#757575\" fill=\"transparent\" points=\"395, 307 400, 297 405, 307\" /></g><g><polyline stroke=\"#757575\" fill=\"transparent\" points=\"290, 350 270, 350 244, 350 224, 350\" /><polyline data-msg=\"dbo.datasource_groups.datasource_site_id = dbo.datasource_sites.id\" data-relation=\"\" data-relation-pk-table-id=\"4811\" data-relation-fk-table-id=\"4808\" data-relation-pk-column-ids=\"36114\" data-relation-fk-column-ids=\"36085\" stroke=\"transparent\" stroke-width=\"10\" fill=\"transparent\" points=\"290, 350 270, 350 244, 350 224, 350\" /><polyline stroke=\"#757575\" fill=\"transparent\" points=\"224, 345 234, 350 224, 355\" /></g><g><polyline stroke=\"#757575\" fill=\"transparent\" points=\"114, 299 114, 279 114, 261 114, 241\" /><polyline data-msg=\"dbo.datasource_computer_groups.datasource_group_id = dbo.datasource_groups.id\" data-relation=\"\" data-relation-pk-table-id=\"4808\" data-relation-fk-table-id=\"4805\" data-relation-pk-column-ids=\"36083\" data-relation-fk-column-ids=\"36045\" stroke=\"transparent\" stroke-width=\"10\" fill=\"transparent\" points=\"114, 299 114, 279 114, 261 114, 241\" /><polyline stroke=\"#757575\" fill=\"transparent\" points=\"109, 241 114, 251 119, 241\" /></g><g data-table=\"\" data-table-id=\"4822\" href=\"t4822\" data-target=\"#right\" class=\"node\" transform=\"translate(293,16)\" data-msg=\"&lt;div&gt;dbo.datasources&lt;/div&gt;\"><g transform=\"translate(0,24)\"><rect width=\"220\" height=\"30\" stroke-width=\"1\" fill=\"#FFFFFF\" stroke=\"#B3B3B3\" /><g data-column=\"\" data-column-id=\"36199\"><image x=\"4\" y=\"7\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAAd0SU1FB+AIFgsEMj98icUAAAB4SURBVDhPtZBRCoAwDEN7BE/hbr6/Hc8vkdpCCkFkdhs+CI6aZGXyC7VKMTXTgW/Br28Q1hflSszoN0Zop3ODpY8Zfe0IsQ5Y+piRN2ClN1h7A8fN0+HgUXBhnIcLMBqDC0wnxnm4AKMxuGCqZCkcDIdVdcMxicgN33uTBg3NWDkAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"4\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px; height: 16px;\"><p style=\"max-width: 198px; max-height: 16px;\">id</p></div></foreignObject><text x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">id</text></switch></g></g><rect width=\"220\" height=\"24\" stroke-width=\"1\" stroke-dasharray=\"1,0\" fill=\"#F6F6F6\" stroke=\"#B3B3B3\" class=\"hoverable\" /><image x=\"4\" y=\"6\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEAAACxABrSO9dQAAAEhJREFUOE9j+P//P0UYqyApGEykpaX9JxUPQgM+vP8Ix8TwqW8AqRjDAHQbCPGpbwCpGMMAdBsI8alvAKkYxQBKMFZB4vF/BgDgONgjHevZ8QAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"0\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px; height: 24px;\"><p style=\"max-width: 201px; max-height: 16px;\">dbo.datasources</p></div></foreignObject><text mask=\"url('#node-text-mask-4822')\" x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">dbo.datasources</text></switch></g><g data-table=\"\" data-table-id=\"4805\" href=\"t4805\" data-target=\"#right\" class=\"node\" transform=\"translate(4,123)\" data-msg=\"&lt;div&gt;dbo.datasource_computer_groups&lt;/div&gt;\"><g transform=\"translate(0,24)\"><rect width=\"220\" height=\"94\" stroke-width=\"1\" fill=\"#FFFFFF\" stroke=\"#B3B3B3\" /><g data-column=\"\" data-column-id=\"36044\"><image x=\"4\" y=\"7\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAAd0SU1FB+AIFgsEMj98icUAAAB4SURBVDhPtZBRCoAwDEN7BE/hbr6/Hc8vkdpCCkFkdhs+CI6aZGXyC7VKMTXTgW/Br28Q1hflSszoN0Zop3ODpY8Zfe0IsQ5Y+piRN2ClN1h7A8fN0+HgUXBhnIcLMBqDC0wnxnm4AKMxuGCqZCkcDIdVdcMxicgN33uTBg3NWDkAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"4\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px; height: 16px;\"><p style=\"max-width: 198px; max-height: 16px;\">id</p></div></foreignObject><text x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">id</text></switch></g><g data-column=\"\" data-column-id=\"36045\"><image x=\"4\" y=\"23\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwAAADsABataJCQAAAGZJREFUOE/ljCEOwDAMA/vakj1hJZUCykZKgoLyzk2VbDZp7TK2kwxi5Zx+TM75HMG5BuXe+4ZqHsqquqOah7KZKap5KLv7vcyH1UD/YOAJCq21A9U6HBGR+EitNT5SSomP4HxLShcXR3rzpWaWPgAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"20\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px; height: 16px;\"><p style=\"max-width: 198px; max-height: 16px;\">datasource_group_id</p></div></foreignObject><text x=\"17\" y=\"28\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">datasource_group_id</text></switch></g><g data-column=\"\" data-column-id=\"36046\"><image x=\"4\" y=\"39\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwAAADsABataJCQAAAGZJREFUOE/ljCEOwDAMA/vakj1hJZUCykZKgoLyzk2VbDZp7TK2kwxi5Zx+TM75HMG5BuXe+4ZqHsqquqOah7KZKap5KLv7vcyH1UD/YOAJCq21A9U6HBGR+EitNT5SSomP4HxLShcXR3rzpWaWPgAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"36\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px; height: 16px;\"><p style=\"max-width: 198px; max-height: 16px;\">datasource_device_id</p></div></foreignObject><text x=\"17\" y=\"44\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">datasource_device_id</text></switch></g><g data-column=\"\" data-column-id=\"36047\"><image x=\"4\" y=\"55\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAAd0SU1FB+AIFgwUMen43KsAAAB7SURBVDhPtZDRCYAwEEM7glPYTdzJoVzDjfolojnIQRCp1xYfBMuZpEfTLyzrnqENKvxm/vqG4etFsRIY7UYPzXLeaKkDo63tIVWhpQ6MuoEqvMHYGxhm7g47j4KT4zhawFEbWgAdHMfRAo7a0IKukqGw0xxGYOIxSEo3xcegeVwoIokAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"52\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px; height: 16px;\"><p style=\"max-width: 198px; max-height: 16px;\">datasource_site_id</p></div></foreignObject><text x=\"17\" y=\"60\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">datasource_site_id</text></switch></g><g data-column=\"\" data-column-id=\"36048\"><image x=\"4\" y=\"71\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwAAADsABataJCQAAAGZJREFUOE/ljCEOwDAMA/vakj1hJZUCykZKgoLyzk2VbDZp7TK2kwxi5Zx+TM75HMG5BuXe+4ZqHsqquqOah7KZKap5KLv7vcyH1UD/YOAJCq21A9U6HBGR+EitNT5SSomP4HxLShcXR3rzpWaWPgAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"68\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px; height: 16px;\"><p style=\"max-width: 198px; max-height: 16px;\">datasource_id</p></div></foreignObject><text x=\"17\" y=\"76\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">datasource_id</text></switch></g></g><rect width=\"220\" height=\"24\" stroke-width=\"1\" stroke-dasharray=\"1,0\" fill=\"#F6F6F6\" stroke=\"#B3B3B3\" class=\"hoverable\" /><image x=\"4\" y=\"6\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEAAACxABrSO9dQAAAGlJREFUOE/NkEEOwCAIBH0t3699AQ1NlqDdWIg99DAKsk6MTVW3oIcV7kVEtMoPBf04nUz/vaDKIFiReoHB7EZKgEDcEbCagfnwgXNtgfk8zqgAPUKokYmzh4CFbGe4ACF2OYMXzP6OtgthdNdFVNWVkQAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"0\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px; height: 24px;\"><p style=\"max-width: 201px; max-height: 16px;\">dbo.datasource_computer_groups</p></div></foreignObject><text mask=\"url('#node-text-mask-4805')\" x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">dbo.datasource_computer_groups</text></switch></g><g data-table=\"\" data-table-id=\"4806\" href=\"t4806\" data-target=\"#right\" class=\"node\" transform=\"translate(590,157)\" data-msg=\"&lt;div&gt;dbo.datasource_devices&lt;/div&gt;\"><g transform=\"translate(0,24)\"><rect width=\"220\" height=\"62\" stroke-width=\"1\" fill=\"#FFFFFF\" stroke=\"#B3B3B3\" /><g data-column=\"\" data-column-id=\"36053\"><image x=\"4\" y=\"7\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAAd0SU1FB+AIFgsEMj98icUAAAB4SURBVDhPtZBRCoAwDEN7BE/hbr6/Hc8vkdpCCkFkdhs+CI6aZGXyC7VKMTXTgW/Br28Q1hflSszoN0Zop3ODpY8Zfe0IsQ5Y+piRN2ClN1h7A8fN0+HgUXBhnIcLMBqDC0wnxnm4AKMxuGCqZCkcDIdVdcMxicgN33uTBg3NWDkAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"4\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px; height: 16px;\"><p style=\"max-width: 198px; max-height: 16px;\">id</p></div></foreignObject><text x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">id</text></switch></g><g data-column=\"\" data-column-id=\"36054\"><image x=\"4\" y=\"23\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAAd0SU1FB+AIFgwUMen43KsAAAB7SURBVDhPtZDRCYAwEEM7glPYTdzJoVzDjfolojnIQRCp1xYfBMuZpEfTLyzrnqENKvxm/vqG4etFsRIY7UYPzXLeaKkDo63tIVWhpQ6MuoEqvMHYGxhm7g47j4KT4zhawFEbWgAdHMfRAo7a0IKukqGw0xxGYOIxSEo3xcegeVwoIokAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"20\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px; height: 16px;\"><p style=\"max-width: 198px; max-height: 16px;\">remote_id</p></div></foreignObject><text x=\"17\" y=\"28\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">remote_id</text></switch></g><g data-column=\"\" data-column-id=\"36055\"><image x=\"4\" y=\"39\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwAAADsABataJCQAAAGZJREFUOE/ljCEOwDAMA/vakj1hJZUCykZKgoLyzk2VbDZp7TK2kwxi5Zx+TM75HMG5BuXe+4ZqHsqquqOah7KZKap5KLv7vcyH1UD/YOAJCq21A9U6HBGR+EitNT5SSomP4HxLShcXR3rzpWaWPgAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"36\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px; height: 16px;\"><p style=\"max-width: 198px; max-height: 16px;\">datasource_id</p></div></foreignObject><text x=\"17\" y=\"44\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">datasource_id</text></switch></g></g><rect width=\"220\" height=\"24\" stroke-width=\"1\" stroke-dasharray=\"1,0\" fill=\"#F6F6F6\" stroke=\"#B3B3B3\" class=\"hoverable\" /><image x=\"4\" y=\"6\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEAAACxABrSO9dQAAAGlJREFUOE/NkEEOwCAIBH0t3699AQ1NlqDdWIg99DAKsk6MTVW3oIcV7kVEtMoPBf04nUz/vaDKIFiReoHB7EZKgEDcEbCagfnwgXNtgfk8zqgAPUKokYmzh4CFbGe4ACF2OYMXzP6OtgthdNdFVNWVkQAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"0\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px; height: 24px;\"><p style=\"max-width: 201px; max-height: 16px;\">dbo.datasource_devices</p></div></foreignObject><text mask=\"url('#node-text-mask-4806')\" x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">dbo.datasource_devices</text></switch></g><g data-table=\"\" data-table-id=\"4812\" href=\"t4812\" data-target=\"#right\" class=\"node\" transform=\"translate(590,273)\" data-msg=\"&lt;div&gt;dbo.device_dimensions&lt;/div&gt;\"><g transform=\"translate(0,24)\"><rect width=\"220\" height=\"30\" stroke-width=\"1\" fill=\"#FFFFFF\" stroke=\"#B3B3B3\" /><g data-column=\"\" data-column-id=\"36126\"><image x=\"4\" y=\"7\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAAd0SU1FB+AIFgsEMj98icUAAAB4SURBVDhPtZBRCoAwDEN7BE/hbr6/Hc8vkdpCCkFkdhs+CI6aZGXyC7VKMTXTgW/Br28Q1hflSszoN0Zop3ODpY8Zfe0IsQ5Y+piRN2ClN1h7A8fN0+HgUXBhnIcLMBqDC0wnxnm4AKMxuGCqZCkcDIdVdcMxicgN33uTBg3NWDkAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"4\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px; height: 16px;\"><p style=\"max-width: 198px; max-height: 16px;\">datasource_device_id</p></div></foreignObject><text x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">datasource_device_id</text></switch></g></g><rect width=\"220\" height=\"24\" stroke-width=\"1\" stroke-dasharray=\"1,0\" fill=\"#F6F6F6\" stroke=\"#B3B3B3\" class=\"hoverable\" /><image x=\"4\" y=\"6\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEAAACxABrSO9dQAAAGlJREFUOE/NkEEOwCAIBH0t3699AQ1NlqDdWIg99DAKsk6MTVW3oIcV7kVEtMoPBf04nUz/vaDKIFiReoHB7EZKgEDcEbCagfnwgXNtgfk8zqgAPUKokYmzh4CFbGe4ACF2OYMXzP6OtgthdNdFVNWVkQAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"0\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px; height: 24px;\"><p style=\"max-width: 201px; max-height: 16px;\">dbo.device_dimensions</p></div></foreignObject><text mask=\"url('#node-text-mask-4812')\" x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">dbo.device_dimensions</text></switch></g><g data-table=\"\" data-table-id=\"4811\" href=\"t4811\" data-target=\"#right\" class=\"node\" transform=\"translate(290,307)\" data-msg=\"&lt;div&gt;dbo.datasource_sites&lt;/div&gt;\"><g transform=\"translate(0,24)\"><rect width=\"220\" height=\"62\" stroke-width=\"1\" fill=\"#FFFFFF\" stroke=\"#B3B3B3\" /><g data-column=\"\" data-column-id=\"36114\"><image x=\"4\" y=\"7\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAAd0SU1FB+AIFgsEMj98icUAAAB4SURBVDhPtZBRCoAwDEN7BE/hbr6/Hc8vkdpCCkFkdhs+CI6aZGXyC7VKMTXTgW/Br28Q1hflSszoN0Zop3ODpY8Zfe0IsQ5Y+piRN2ClN1h7A8fN0+HgUXBhnIcLMBqDC0wnxnm4AKMxuGCqZCkcDIdVdcMxicgN33uTBg3NWDkAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"4\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px; height: 16px;\"><p style=\"max-width: 198px; max-height: 16px;\">id</p></div></foreignObject><text x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">id</text></switch></g><g data-column=\"\" data-column-id=\"36115\"><image x=\"4\" y=\"23\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwAAADsABataJCQAAAGZJREFUOE/ljCEOwDAMA/vakj1hJZUCykZKgoLyzk2VbDZp7TK2kwxi5Zx+TM75HMG5BuXe+4ZqHsqquqOah7KZKap5KLv7vcyH1UD/YOAJCq21A9U6HBGR+EitNT5SSomP4HxLShcXR3rzpWaWPgAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"20\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px; height: 16px;\"><p style=\"max-width: 198px; max-height: 16px;\">datasource_id</p></div></foreignObject><text x=\"17\" y=\"28\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">datasource_id</text></switch></g><g data-column=\"\" data-column-id=\"36116\"><image x=\"4\" y=\"39\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAAd0SU1FB+AIFgwUMen43KsAAAB7SURBVDhPtZDRCYAwEEM7glPYTdzJoVzDjfolojnIQRCp1xYfBMuZpEfTLyzrnqENKvxm/vqG4etFsRIY7UYPzXLeaKkDo63tIVWhpQ6MuoEqvMHYGxhm7g47j4KT4zhawFEbWgAdHMfRAo7a0IKukqGw0xxGYOIxSEo3xcegeVwoIokAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"36\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px; height: 16px;\"><p style=\"max-width: 198px; max-height: 16px;\">remote_id</p></div></foreignObject><text x=\"17\" y=\"44\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">remote_id</text></switch></g></g><rect width=\"220\" height=\"24\" stroke-width=\"1\" stroke-dasharray=\"1,0\" fill=\"#F6F6F6\" stroke=\"#B3B3B3\" class=\"hoverable\" /><image x=\"4\" y=\"6\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEAAACxABrSO9dQAAAGlJREFUOE/NkEEOwCAIBH0t3699AQ1NlqDdWIg99DAKsk6MTVW3oIcV7kVEtMoPBf04nUz/vaDKIFiReoHB7EZKgEDcEbCagfnwgXNtgfk8zqgAPUKokYmzh4CFbGe4ACF2OYMXzP6OtgthdNdFVNWVkQAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"0\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px; height: 24px;\"><p style=\"max-width: 201px; max-height: 16px;\">dbo.datasource_sites</p></div></foreignObject><text mask=\"url('#node-text-mask-4811')\" x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">dbo.datasource_sites</text></switch></g><g data-table=\"\" data-table-id=\"4808\" href=\"t4808\" data-target=\"#right\" class=\"node\" transform=\"translate(4,299)\" data-msg=\"&lt;div&gt;dbo.datasource_groups&lt;/div&gt;\"><g transform=\"translate(0,24)\"><rect width=\"220\" height=\"78\" stroke-width=\"1\" fill=\"#FFFFFF\" stroke=\"#B3B3B3\" /><g data-column=\"\" data-column-id=\"36083\"><image x=\"4\" y=\"7\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAAd0SU1FB+AIFgsEMj98icUAAAB4SURBVDhPtZBRCoAwDEN7BE/hbr6/Hc8vkdpCCkFkdhs+CI6aZGXyC7VKMTXTgW/Br28Q1hflSszoN0Zop3ODpY8Zfe0IsQ5Y+piRN2ClN1h7A8fN0+HgUXBhnIcLMBqDC0wnxnm4AKMxuGCqZCkcDIdVdcMxicgN33uTBg3NWDkAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"4\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px; height: 16px;\"><p style=\"max-width: 198px; max-height: 16px;\">id</p></div></foreignObject><text x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">id</text></switch></g><g data-column=\"\" data-column-id=\"36084\"><image x=\"4\" y=\"23\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAAd0SU1FB+AIFgwUMen43KsAAAB7SURBVDhPtZDRCYAwEEM7glPYTdzJoVzDjfolojnIQRCp1xYfBMuZpEfTLyzrnqENKvxm/vqG4etFsRIY7UYPzXLeaKkDo63tIVWhpQ6MuoEqvMHYGxhm7g47j4KT4zhawFEbWgAdHMfRAo7a0IKukqGw0xxGYOIxSEo3xcegeVwoIokAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"20\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px; height: 16px;\"><p style=\"max-width: 198px; max-height: 16px;\">datasource_id</p></div></foreignObject><text x=\"17\" y=\"28\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">datasource_id</text></switch></g><g data-column=\"\" data-column-id=\"36085\"><image x=\"4\" y=\"39\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwAAADsABataJCQAAAGZJREFUOE/ljCEOwDAMA/vakj1hJZUCykZKgoLyzk2VbDZp7TK2kwxi5Zx+TM75HMG5BuXe+4ZqHsqquqOah7KZKap5KLv7vcyH1UD/YOAJCq21A9U6HBGR+EitNT5SSomP4HxLShcXR3rzpWaWPgAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"36\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px; height: 16px;\"><p style=\"max-width: 198px; max-height: 16px;\">datasource_site_id</p></div></foreignObject><text x=\"17\" y=\"44\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">datasource_site_id</text></switch></g><g data-column=\"\" data-column-id=\"36086\"><image x=\"4\" y=\"55\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAAd0SU1FB+AIFgwUMen43KsAAAB7SURBVDhPtZDRCYAwEEM7glPYTdzJoVzDjfolojnIQRCp1xYfBMuZpEfTLyzrnqENKvxm/vqG4etFsRIY7UYPzXLeaKkDo63tIVWhpQ6MuoEqvMHYGxhm7g47j4KT4zhawFEbWgAdHMfRAo7a0IKukqGw0xxGYOIxSEo3xcegeVwoIokAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"52\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px; height: 16px;\"><p style=\"max-width: 198px; max-height: 16px;\">remote_id</p></div></foreignObject><text x=\"17\" y=\"60\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">remote_id</text></switch></g></g><rect width=\"220\" height=\"24\" stroke-width=\"1\" stroke-dasharray=\"1,0\" fill=\"#F6F6F6\" stroke=\"#B3B3B3\" class=\"hoverable\" /><image x=\"4\" y=\"6\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEAAACxABrSO9dQAAAGlJREFUOE/NkEEOwCAIBH0t3699AQ1NlqDdWIg99DAKsk6MTVW3oIcV7kVEtMoPBf04nUz/vaDKIFiReoHB7EZKgEDcEbCagfnwgXNtgfk8zqgAPUKokYmzh4CFbGe4ACF2OYMXzP6OtgthdNdFVNWVkQAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"0\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px; height: 24px;\"><p style=\"max-width: 201px; max-height: 16px;\">dbo.datasource_groups</p></div></foreignObject><text mask=\"url('#node-text-mask-4808')\" x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">dbo.datasource_groups</text></switch></g></g></svg>"};