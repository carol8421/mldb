// This file is part of MLDB. Copyright 2016 mldb.ai inc. All rights reserved.

function assertEqual(expr, val)
{
    if (expr == val)
        return;
    if (JSON.stringify(expr) == JSON.stringify(val))
        return;

    mldb.log(expr, 'IS NOT EQUAL TO', val);

    throw "Assertion failure";
}

var config = {
    type: "import.text",
    params: {
        dataFileUrl : "file://thisfiledoesnotexist",
        outputDataset: {
            id: "broken_fail",
        },
        runOnCreation: true,        
    }
}

var resp = mldb.put("/v1/procedures/csv_proc", config)

mldb.log(resp);

assertEqual(resp.json.details.runError.error.indexOf("No such file or directory") >= 0, true);
assertEqual(resp.json.details.runError.error.indexOf("thisfiledoesnotexist") >= 0, true);

"success"

