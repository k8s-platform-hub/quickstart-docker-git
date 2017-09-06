import requests, os, json, base64, uuid

FISSION_CONTROLLER = "http://controller.fission/v1"
#FISSION_CONTROLLER = "http://localhost:8181/v1"

def AddFunction(funcname, env, code64):
    j = {
        "metadata" : {
            "name" : funcname
        },
        "environment":{
            "name" : env
        },
        "code" : code64 # base64
    }
    url = FISSION_CONTROLLER + "/functions"
    print "Add Function"
    print j
    print
    requests.post(url, json=j)

def AddHTTPTrigger(funcname, method, urlpattern):
    j = {
        'metadata':{
            "name":str(uuid.uuid4())
        },
        'method':method,
        'urlpattern':urlpattern,
        'function':{
            'name':funcname
        }
    }
    url = FISSION_CONTROLLER + "/triggers/http"
    print "Add Trigger"
    print j
    print
    requests.post(url, json=j)
    
def ReadAndAddFiles():
    #files = os.listdir("functions")
    with open("config.json") as f:
        config = json.load(f)
    for c in config:
        funcname = c['name']
        env = c['env']
        
        fpath = os.path.join("functions", c['file'])
        with open(fpath) as f:
            code = f.read()
        code64 = base64.b64encode(code)
        AddFunction(funcname, env, code64)
        triggers = c['http_triggers']
        for trigger in triggers:
            AddHTTPTrigger(funcname, trigger['method'], trigger['urlpattern'])

            
def DeleteAll():
    functions_url = FISSION_CONTROLLER + "/functions"
    f = requests.get(functions_url)
    functions = f.json()

    print "Functions: ", functions
    
    httptriggers_url = FISSION_CONTROLLER + "/triggers/http"
    h = requests.get(httptriggers_url)
    httptriggers = h.json()

    print "Triggers: ", httptriggers
    
    for function in functions:
        for trigger in httptriggers:
            if trigger['function']['name'] == function['metadata']['name']:
                DeleteTrigger(trigger)
        DeleteFunction(function)

def DeleteTrigger(trigger):
    print "delete trigger: ", trigger
    trigger_url = FISSION_CONTROLLER + "/triggers/http/" + trigger['metadata']['name']
    h = requests.delete(trigger_url)
    return h.status_code

def DeleteFunction(function):
    print "delete function: ", function
    function_url = FISSION_CONTROLLER + "/functions/" + function['metadata']['name']
    f = requests.delete(function_url)
    return f.status_code

def CheckAndAddEnv():
    AddEnv("python", "fission/python-env")
    AddEnv("node", "fission/node-env")

def AddEnv(name, image):
    j = {
        "metadata": {
            "name": name
        },
        "runContainerImageUrl":image
    }

    env_url = FISSION_CONTROLLER + "/environments"
    print "Add Environment"
    print j
    requests.post(env_url, json=j)

    
if __name__ == "__main__":
    CheckAndAddEnv()
    DeleteAll()
    ReadAndAddFiles()
