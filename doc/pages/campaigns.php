<section>
    <h2>Campaigns</h2>
    <div class='module-description'>
        These are special functions which can be used on campaigns<br>
        In addition, all <a class='basicFunctionsLink' href="#BasicFunctions">Basic Functions</a> can be invoked on campaigns.<br>
        To use these functions you have to invoke the <b>$AA.campaigns()</b> method first.<br>
        To see detailed structure and functionality of campaigns, check the <a href="<?= $config['urls']['restApiDoc'] ?>#Emailcampaigns" target='_blank'>Automizy REST API Docs</a>
    </div>
    <table class='functions-table'>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getOpenStatById</h3>
                    <div class='function-description'>
                        Use this function to get the number of opens.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting total and unique open statistics of the first campaign
$AA.campaigns().getOpenStatById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
{
    total: 2,
    unique: 1
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getClickStatById</h3>
                    <div class='function-description'>
                        Use this function to get the number of clicks on your links in your given campaign.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting total and unique click statistics of the first campaign
$AA.campaigns().getClickStatById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
{
    total: 2,
    unique: 1
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getShareStatById</h3>
                    <div class='function-description'>
                        Use this function to get the share statistics of the given campaign.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting total and unique share statistics of the first campaign
$AA.campaigns().getShareStatById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
{
    total: 0,
    unique: 0
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getUnsubscribeStatById</h3>
                    <div class='function-description'>
                        Use this function to get the number of contacts who clicked on the unsubscribe link in the given campaign.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting total unsubscribe statistics of the first campaign
$AA.campaigns().getUnsubscribeStatById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
{
    total: 0
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getBounceStatById</h3>
                    <div class='function-description'>
                        Use this function to get the bounce statistics of the given campaign.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting soft and hard bounce statistics of the first campaign
$AA.campaigns().getBounceStatById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
{
    soft: 0,
    hard: 0
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getGeoStatById</h3>
                    <div class='function-description'>
                        Use this function to get the geo statistics of the given campaign.<br>
                        Please note that opens through proxy servers are not counted by this function.
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting the geo statistics of the first campaign
$AA.campaigns().getGeoStatById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//Response is an array, each element represents a region
[
    {
        count: "1",
        country: "HUNGARY",
        region: "BUDAPEST"
    },
    {
        count: "3",
        country: "USA",
        region: "FLORIDA"
    }
]
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getOpenTimeLineById</h3>
                    <div class='function-description'>
                        Use this function to get the array representing the open time line statistics of the given campaign.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting open time line statistics of the first campaign
$AA.campaigns().getOpenTimeLineById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//Response is an array containing 31 elements
[
    //First timeframe
    {
        date :{
                date: "15-05-06 02:08:44",
                timezone_type:3,
                timezone:"Europe\/Budapest"
            },
        value{
            all: {
                total: 3,
                unique: 2
            }
        }
    },
    //Following timeframes
    {
        date :{
                date: "15-05-06 03:10:15",
                timezone_type:3,
                timezone:"Europe\/Budapest"
            },
        value{
            all: {
                total: 3,
                unique: 2
            }
        }
    },
    {},
    .
    .
    .
]
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getClickTimeLineById</h3>
                    <div class='function-description'>
                        Use this function to get the array representing the click time line statistics of the given campaign.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting click time line statistics of the first campaign
$AA.campaigns().getClickTimeLineById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//Response is an array containing 31 elements
[
    //First timeframe
    {
        date :{
                date: "15-05-06 02:08:44",
                timezone_type:3,
                timezone:"Europe\/Budapest"
            },
        value{
            all: {
                total: 3,
                unique: 2
            }
        }
    },
    //Following timeframes
    {
        date :{
                date: "15-05-06 03:10:15",
                timezone_type:3,
                timezone:"Europe\/Budapest"
            },
        value{
            all: {
                total: 3,
                unique: 2
            }
        }
    },
    {},
    .
    .
    .
]
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getOpenDevicePieById</h3>
                    <div class='function-description'>
                        Use this function to get the array representing the pie chart of opens, showing device statistics of the given campaign.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting pie chart of open device statistics of the first campaign
$AA.campaigns().getOpenDevicePieById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
{
    "PC\/Laptop": 10,
    "Mobile": 3
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getClickDevicePieById</h3>
                    <div class='function-description'>
                        Use this function to get the array representing the pie chart of clicks, showing device statistics of the given campaign.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting pie chart of click device statistics of the first campaign
$AA.campaigns().getClickDevicePieById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
{
    "PC\/Laptop": 3,
    "Mobile": 1
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getOpenOsPieById</h3>
                    <div class='function-description'>
                        Use this function to get the array representing the pie chart of opens, showing operating system device statistics of the given campaign.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting pie chart of opens, showing operating system device statistics of the first campaign
$AA.campaigns().getOpenOsPieById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
{
    "Windows": 10,
    "Linux": 3
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getClickOsPieById</h3>
                    <div class='function-description'>
                        Use this function to get the array representing the pie chart of clicks, showing operating system device statistics of the given campaign.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting pie chart of clicks, showing operating system device statistics of the first campaign
$AA.campaigns().getClickOsPieById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
{
    "Windows": 3,
    "Linux": 1
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getOpenBrowserPieById</h3>
                    <div class='function-description'>
                        Use this function to get the array representing the pie chart of opens, showing browser statistics of the given campaign.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting pie chart of opens, showing browser statistics of the first campaign
$AA.campaigns().getOpenBrowserPieById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
{
    "Firefox": 2,
    "Chrome": 5,
    "Chrome Mobile": 3
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getClickBrowserPieById</h3>
                    <div class='function-description'>
                        Use this function to get the array representing the pie chart of clicks, showing browser statistics of the given campaign.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting pie chart of clicks, showing browser statistics of the first campaign
$AA.campaigns().getClickBrowserPieById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
{
    "Firefox": 1,
    "Chrome": 2,
    "Chrome Mobile": 1
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getOpenDomainListById</h3>
                    <div class='function-description'>
                        Use this function to get the object representing the list of opens, showing domain statistics of the given campaign.<br>
                        You can also use <code>getOpenDomainPieById</code> as an alias.
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                        <code>limit</code>: The maximum number of domains you want to get. Default: <code>false</code>, all domains returned.<br>
                        <code>uniqueContacts</code>: Set it <code>true</code> to show unique opens only. <code>false</code> by default.
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting list of opens, showing domain statistics of the first campaign
$AA.campaigns().getOpenDomainListById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
{
    "gmail.com": 8,
    "hotmail.com": 2,
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getClickDomainListById</h3>
                    <div class='function-description'>
                        Use this function to get the object representing the list of clicks, showing domain statistics of the given campaign.<br>
                        You can also use <code>getClickDomainPieById</code> as an alias.
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format).If <code>false</code>, endpoint will be the current date and time.<br>
                        <code>limit</code>: The maximum number of domains you want to get. Default: <code>false</code>, all domains returned.<br>
                        <code>uniqueContacts</code>: Set it <code>true</code> to show unique clicks only. <code>false</code> by default.
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting list of clicks, showing domain statistics of the first campaign
$AA.campaigns().getClickDomainListById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
{
    "gmail.com": 3,
    "hotmail.com": 1,
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getDomainTopListById</h3>
                    <div class='function-description'>
                        Use this function to get the array showing domain statistics about the number of sent emails in descending order. The data shows how many emails were sent to a particular domain.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format).If <code>false</code>, endpoint will be the current date and time.<br>
                        <code>limit</code>: The maximum number of domains you want to get. Default: <code>false</code>, all domains returned.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting list about the number of sent emails, showing domain statistics of the first campaign
$AA.campaigns().getDomainTopListById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
[
    {
        "domain": "gmail.com",
        "sent": "120",
    },
    {
        "domain": "hotmail.com",
        "sent": "22",
    }
]
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getHeatMapById</h3>
                    <div class='function-description'>
                        Use this function to get the clicked links of the given campaign.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>from</code>: The startpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, startpoint will be the date when the campaign was sent.<br>
                        <code>to</code>: The endpoint of the statistics. (date, yyyy-MM-dd hh:mm:ss format). If <code>false</code>, endpoint will be the current date and time.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting the clicked links of the first campaign
$AA.campaigns().getHeatMapById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//Response is an array, each element represents a link
[
    {
        count:"1",
        url: "[{webversion}]"
    },
    {
        count:"1",
        url: "[{unsubscribelink}]"
    }
]
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getLinksById</h3>
                    <div class='function-description'>
                        Use this function to get the links in the given campaign.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting the clicked links of the first campaign
$AA.campaigns().getLinksById(1);
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
//Response is an object, each element represents a link
{
    "[{unsubscribelink}]",
    "[{webversion}]",
    "[{confirmlink}]",
    "https://www.facebook.com/sharer/sharer.php?u=[{webversion}]"
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
        <tr>
            <td class='function-body'>
                <article>
                    <h3>getCombinedById</h3>
                    <div class='function-description'>
                        Use this function to get multiple types of data of the given campaign.<br>
                        <div class='function-paramenters'>Parameters:</div>
                        <code>id</code>: The id of the campaign you want to inspect.<br>
                        <code>data</code>: The types of data you want to get. The keys of the response object will be the same you specified in the data object.<br>
                    </div>
                </article>
            </td>
            <td class='function-example'>
                <div class='example-tab' data-name='request'>Request</div><div class='example-tab'  data-name='response'>Response</div>
                <pre class='prettyprint linenums'  data-name='request'>
//Getting different types of data of the first campaign in different formats
$AA.campaigns().getCombinedById(1, {
    open: {
        type:'open',
        format:'total',
        from: "2015.11.01",
        to: "2015.11.10"
    },
    deviceOpenPie: {
        type:'open',
        format:'aggregate',
        groupBy: 'device',
        from: "2015.11.01",
        to: "2015.11.10"
    },
    geoChart: {
        type:'geo-location',
        format:'raw',
        from: "2015.11.01",
        to: "2015.11.10"
    }
});
                </pre>
                <pre class='prettyprint linenums' data-name='response'>
{
    deviceOpenPie: {
        "PC\/Laptop": 10,
        "Mobile": 3
    },
    geoChart:[
        {
            count: "4",
            country: "HUNGARY",
            region: "BUDAPEST"
        },
        {
            count: "9",
            country: "USA",
            region: "FLORIDA"
        }
    ],
    open:{
        total: 13,
        unique: 8
    }
}
                </pre>
                <div class='function-returns'> Returns: <a class='jqrxhr-link' href='http://api.jquery.com/jQuery.ajax/#jqXHR' target='blank'>jqXHR</a></div>
            </td>
        </tr>
    </table>
</section>
