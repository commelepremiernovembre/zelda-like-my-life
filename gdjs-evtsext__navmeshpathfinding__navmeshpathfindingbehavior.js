
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior || {};

/**
 * Behavior generated from Navigation mesh pathfinding (experimental)
 */
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior = class NavMeshPathfindingBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Acceleration = behaviorData.Acceleration !== undefined ? behaviorData.Acceleration : Number("400") || 0;
    this._behaviorData.MaxSpeed = behaviorData.MaxSpeed !== undefined ? behaviorData.MaxSpeed : Number("200") || 0;
    this._behaviorData.AngularMaxSpeed = behaviorData.AngularMaxSpeed !== undefined ? behaviorData.AngularMaxSpeed : Number("180") || 0;
    this._behaviorData.RotateObject = behaviorData.RotateObject !== undefined ? behaviorData.RotateObject : false;
    this._behaviorData.AngleOffset = behaviorData.AngleOffset !== undefined ? behaviorData.AngleOffset : Number("0") || 0;
    this._behaviorData.CollisionShape = behaviorData.CollisionShape !== undefined ? behaviorData.CollisionShape : "Bounding disk";
    this._behaviorData.ExtraBorder = behaviorData.ExtraBorder !== undefined ? behaviorData.ExtraBorder : Number("0") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Acceleration !== undefined)
      this._behaviorData.Acceleration = behaviorOverriding.Acceleration;
    if (behaviorOverriding.MaxSpeed !== undefined)
      this._behaviorData.MaxSpeed = behaviorOverriding.MaxSpeed;
    if (behaviorOverriding.AngularMaxSpeed !== undefined)
      this._behaviorData.AngularMaxSpeed = behaviorOverriding.AngularMaxSpeed;
    if (behaviorOverriding.RotateObject !== undefined)
      this._behaviorData.RotateObject = behaviorOverriding.RotateObject;
    if (behaviorOverriding.AngleOffset !== undefined)
      this._behaviorData.AngleOffset = behaviorOverriding.AngleOffset;
    if (behaviorOverriding.CollisionShape !== undefined)
      this._behaviorData.CollisionShape = behaviorOverriding.CollisionShape;
    if (behaviorOverriding.ExtraBorder !== undefined)
      this._behaviorData.ExtraBorder = behaviorOverriding.ExtraBorder;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Acceleration: this._behaviorData.Acceleration,
    MaxSpeed: this._behaviorData.MaxSpeed,
    AngularMaxSpeed: this._behaviorData.AngularMaxSpeed,
    RotateObject: this._behaviorData.RotateObject,
    AngleOffset: this._behaviorData.AngleOffset,
    CollisionShape: this._behaviorData.CollisionShape,
    ExtraBorder: this._behaviorData.ExtraBorder,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Acceleration !== undefined)
      this._behaviorData.Acceleration = networkSyncData.props.Acceleration;
    if (networkSyncData.props.MaxSpeed !== undefined)
      this._behaviorData.MaxSpeed = networkSyncData.props.MaxSpeed;
    if (networkSyncData.props.AngularMaxSpeed !== undefined)
      this._behaviorData.AngularMaxSpeed = networkSyncData.props.AngularMaxSpeed;
    if (networkSyncData.props.RotateObject !== undefined)
      this._behaviorData.RotateObject = networkSyncData.props.RotateObject;
    if (networkSyncData.props.AngleOffset !== undefined)
      this._behaviorData.AngleOffset = networkSyncData.props.AngleOffset;
    if (networkSyncData.props.CollisionShape !== undefined)
      this._behaviorData.CollisionShape = networkSyncData.props.CollisionShape;
    if (networkSyncData.props.ExtraBorder !== undefined)
      this._behaviorData.ExtraBorder = networkSyncData.props.ExtraBorder;
  }

  // Properties:
  
  _getAcceleration() {
    return this._behaviorData.Acceleration !== undefined ? this._behaviorData.Acceleration : Number("400") || 0;
  }
  _setAcceleration(newValue) {
    this._behaviorData.Acceleration = newValue;
  }
  _getMaxSpeed() {
    return this._behaviorData.MaxSpeed !== undefined ? this._behaviorData.MaxSpeed : Number("200") || 0;
  }
  _setMaxSpeed(newValue) {
    this._behaviorData.MaxSpeed = newValue;
  }
  _getAngularMaxSpeed() {
    return this._behaviorData.AngularMaxSpeed !== undefined ? this._behaviorData.AngularMaxSpeed : Number("180") || 0;
  }
  _setAngularMaxSpeed(newValue) {
    this._behaviorData.AngularMaxSpeed = newValue;
  }
  _getRotateObject() {
    return this._behaviorData.RotateObject !== undefined ? this._behaviorData.RotateObject : false;
  }
  _setRotateObject(newValue) {
    this._behaviorData.RotateObject = newValue;
  }
  _toggleRotateObject() {
    this._setRotateObject(!this._getRotateObject());
  }
  _getAngleOffset() {
    return this._behaviorData.AngleOffset !== undefined ? this._behaviorData.AngleOffset : Number("0") || 0;
  }
  _setAngleOffset(newValue) {
    this._behaviorData.AngleOffset = newValue;
  }
  _getCollisionShape() {
    return this._behaviorData.CollisionShape !== undefined ? this._behaviorData.CollisionShape : "Bounding disk";
  }
  _setCollisionShape(newValue) {
    this._behaviorData.CollisionShape = newValue;
  }
  _getExtraBorder() {
    return this._behaviorData.ExtraBorder !== undefined ? this._behaviorData.ExtraBorder : Number("0") || 0;
  }
  _setExtraBorder(newValue) {
    this._behaviorData.ExtraBorder = newValue;
  }
}

/**
 * Shared data generated from Navigation mesh pathfinding (experimental)
 */
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.SharedData = class NavMeshPathfindingBehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._NavMeshPathfinding_NavMeshPathfindingBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._NavMeshPathfinding_NavMeshPathfindingBehaviorSharedData = new gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._NavMeshPathfinding_NavMeshPathfindingBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.onCreatedContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.onCreatedContext.userFunc0x10306f0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
behavior.__NavMeshPathfinding = behavior.__NavMeshPathfinding || {};
behavior.__NavMeshPathfinding.pathfinding = new gdjs.__NavMeshPathfinding.NavMeshPathfindingBehavior(behavior);

};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__NavMeshPathfinding__DefineJavaScript.func(runtimeScene, eventsFunctionContext);
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.onCreatedContext.userFunc0x10306f0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.doStepPreEventsContext.userFunc0x10be180 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

behavior.__NavMeshPathfinding.pathfinding.doStepPreEvents(runtimeScene);

};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.doStepPreEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.doStepPreEventsContext.GDObjectObjects1;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.doStepPreEventsContext.userFunc0x10be180(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetDestinationContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetDestinationContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetDestinationContext.GDObjectObjects1= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetDestinationContext.userFunc0x1012440 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

const destinationX = eventsFunctionContext.getArgument("DestinationX");
const destinationY = eventsFunctionContext.getArgument("DestinationY");

behavior.__NavMeshPathfinding.pathfinding.moveTo(runtimeScene, destinationX, destinationY);

};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetDestinationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetDestinationContext.GDObjectObjects1);

const objects = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetDestinationContext.GDObjectObjects1;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetDestinationContext.userFunc0x1012440(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetDestination = function(DestinationX, DestinationY, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "DestinationX") return DestinationX;
if (argName === "DestinationY") return DestinationY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetDestinationContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetDestinationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetDestinationContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.IsMovingContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.IsMovingContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.IsMovingContext.GDObjectObjects1= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.IsMovingContext.userFunc0x1017298 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.__NavMeshPathfinding.pathfinding.pathFollower.isMoving();

};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.IsMovingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.IsMovingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.IsMovingContext.GDObjectObjects1;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.IsMovingContext.userFunc0x1017298(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.IsMoving = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.IsMovingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.IsMovingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.IsMovingContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PathFoundContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PathFoundContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PathFoundContext.GDObjectObjects1= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PathFoundContext.userFunc0x1012568 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.__NavMeshPathfinding.pathfinding.pathFound();

};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PathFoundContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PathFoundContext.GDObjectObjects1);

const objects = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PathFoundContext.GDObjectObjects1;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PathFoundContext.userFunc0x1012568(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PathFound = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PathFoundContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PathFoundContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PathFoundContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationReachedContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationReachedContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationReachedContext.GDObjectObjects1= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationReachedContext.userFunc0x1017220 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.__NavMeshPathfinding.pathfinding.pathFollower.destinationReached();

};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationReachedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationReachedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationReachedContext.GDObjectObjects1;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationReachedContext.userFunc0x1017220(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationReached = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationReachedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationReachedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationReachedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeCountContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeCountContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeCountContext.GDObjectObjects1= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeCountContext.userFunc0x100e8e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.__NavMeshPathfinding.pathfinding.pathFollower.getNodeCount();

};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeCountContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeCountContext.GDObjectObjects1);

const objects = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeCountContext.GDObjectObjects1;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeCountContext.userFunc0x100e8e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeCount = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeCountContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeCountContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeCountContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeXContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeXContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeXContext.GDObjectObjects1= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeXContext.userFunc0x10bdfd8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

const nodeIndex = eventsFunctionContext.getArgument("NodeIndex");

eventsFunctionContext.returnValue = behavior.__NavMeshPathfinding.pathfinding.pathFollower.getNodeX(nodeIndex);

};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeXContext.GDObjectObjects1;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeXContext.userFunc0x10bdfd8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeX = function(NodeIndex, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NodeIndex") return NodeIndex;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeYContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeYContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeYContext.GDObjectObjects1= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeYContext.userFunc0x1030810 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

const nodeIndex = eventsFunctionContext.getArgument("NodeIndex");

eventsFunctionContext.returnValue = behavior.__NavMeshPathfinding.pathfinding.pathFollower.getNodeY(nodeIndex);

};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeYContext.GDObjectObjects1;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeYContext.userFunc0x1030810(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeY = function(NodeIndex, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NodeIndex") return NodeIndex;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NodeYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeIndexContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeIndexContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeIndexContext.GDObjectObjects1= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeIndexContext.userFunc0x10bdf30 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.__NavMeshPathfinding.pathfinding.pathFollower.getNextNodeIndex();

};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeIndexContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeIndexContext.GDObjectObjects1);

const objects = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeIndexContext.GDObjectObjects1;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeIndexContext.userFunc0x10bdf30(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeIndex = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeIndexContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeIndexContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeIndexContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeXContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeXContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeXContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeXContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeXContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).NodeX((( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).NextNodeIndex(eventsFunctionContext)), eventsFunctionContext));}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeYContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeYContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeYContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeYContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeYContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).NodeY((( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).NextNodeIndex(eventsFunctionContext)), eventsFunctionContext));}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.NextNodeYContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeXContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeXContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeXContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeXContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeXContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).NodeX((( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).NextNodeIndex(eventsFunctionContext)) - 1, eventsFunctionContext));}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeYContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeYContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeYContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeYContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeYContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).NodeY((( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).NextNodeIndex(eventsFunctionContext)) - 1, eventsFunctionContext));}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.PreviousNodeYContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationXContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationXContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationXContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationXContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationXContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).NodeX((( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).NodeCount(eventsFunctionContext)) - 1, eventsFunctionContext));}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationYContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationYContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationYContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationYContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationYContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).NodeY((( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).NodeCount(eventsFunctionContext)) - 1, eventsFunctionContext));}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DestinationYContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleContext.GDObjectObjects1= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleContext.userFunc0x1032de0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

const angle = eventsFunctionContext.getArgument("Angle");
const tolerance = eventsFunctionContext.getArgument("Tolerance");

eventsFunctionContext.returnValue = behavior.__NavMeshPathfinding.pathfinding.pathFollower.getMovementAngle(angle, tolerance);

};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleContext.GDObjectObjects1);

const objects = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleContext.GDObjectObjects1;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleContext.userFunc0x1032de0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngle = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleIsAroundContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleIsAroundContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleIsAroundContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleIsAroundContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleIsAroundContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleIsAroundContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.angleDifference(eventsFunctionContext.getArgument("Angle"), (( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleIsAroundContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleIsAroundContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MovementAngle(eventsFunctionContext))) < eventsFunctionContext.getArgument("Tolerance"));
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleIsAround = function(Angle, Tolerance, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Angle") return Angle;
if (argName === "Tolerance") return Tolerance;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleIsAroundContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleIsAroundContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleIsAroundContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleIsAroundContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MovementAngleIsAroundContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SpeedContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SpeedContext.GDObjectObjects1= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SpeedContext.userFunc0x14cf938 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.__NavMeshPathfinding.pathfinding.pathFollower.getSpeed();

};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SpeedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SpeedContext.GDObjectObjects1;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SpeedContext.userFunc0x14cf938(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.Speed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SpeedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SpeedContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DrawNavMeshContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DrawNavMeshContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DrawNavMeshContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DrawNavMeshContext.GDShapePainterObjects1= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DrawNavMeshContext.userFunc0x100eae0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

const shapePainters = eventsFunctionContext.getObjects("ShapePainter");

for (const shapePainter of shapePainters) {
    behavior.__NavMeshPathfinding.pathfinding.navMeshRenderer.render(runtimeScene, shapePainter);
}

};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DrawNavMeshContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DrawNavMeshContext.GDObjectObjects1);

const objects = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DrawNavMeshContext.GDObjectObjects1;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DrawNavMeshContext.userFunc0x100eae0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DrawNavMesh = function(ShapePainter, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ShapePainter": ShapePainter
},
  _objectArraysMap: {
"Object": thisObjectList
, "ShapePainter": gdjs.objectsListsToArray(ShapePainter)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DrawNavMeshContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DrawNavMeshContext.GDShapePainterObjects1.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DrawNavMeshContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DrawNavMeshContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.DrawNavMeshContext.GDShapePainterObjects1.length = 0;


return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AccelerationContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AccelerationContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AccelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AccelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AccelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceleration();}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.Acceleration = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AccelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AccelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AccelerationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAccelerationContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAccelerationContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAccelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAccelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAccelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAccelerationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAccelerationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAccelerationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAcceleration(eventsFunctionContext.getArgument("Value"));
}
}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAcceleration = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAccelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAccelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAccelerationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MaxSpeedContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MaxSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MaxSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MaxSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MaxSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxSpeed();}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MaxSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MaxSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MaxSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MaxSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MaxSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.MaxSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetMaxSpeedContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetMaxSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetMaxSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetMaxSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetMaxSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetMaxSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetMaxSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetMaxSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxSpeed(eventsFunctionContext.getArgument("Value"));
}
}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetMaxSpeed = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetMaxSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetMaxSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetMaxSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetMaxSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetMaxSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngularMaxSpeedContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngularMaxSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngularMaxSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngularMaxSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngularMaxSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngularMaxSpeed();}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngularMaxSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngularMaxSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngularMaxSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngularMaxSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngularMaxSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngularMaxSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngularMaxSpeedContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngularMaxSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngularMaxSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngularMaxSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngularMaxSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngularMaxSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngularMaxSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngularMaxSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngularMaxSpeed(eventsFunctionContext.getArgument("Value"));
}
}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngularMaxSpeed = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngularMaxSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngularMaxSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngularMaxSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngularMaxSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngularMaxSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngleOffsetContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngleOffsetContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngleOffsetContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngleOffsetContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngleOffsetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleOffset();}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngleOffset = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngleOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngleOffsetContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngleOffsetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngleOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.AngleOffsetContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngleOffsetContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngleOffsetContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngleOffsetContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngleOffsetContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngleOffsetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngleOffsetContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngleOffsetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngleOffsetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngleOffset(eventsFunctionContext.getArgument("Value"));
}
}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngleOffset = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngleOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngleOffsetContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngleOffsetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngleOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetAngleOffsetContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.ExtraBorderContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.ExtraBorderContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.ExtraBorderContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.ExtraBorderContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.ExtraBorderContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getExtraBorder();}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.ExtraBorder = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.ExtraBorderContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.ExtraBorderContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.ExtraBorderContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.ExtraBorderContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.ExtraBorderContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetExtraBorderContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetExtraBorderContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetExtraBorderContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetExtraBorderContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetExtraBorderContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetExtraBorderContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetExtraBorderContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetExtraBorderContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setExtraBorder(eventsFunctionContext.getArgument("Value"));
}
}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetExtraBorder = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetExtraBorderContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetExtraBorderContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetExtraBorderContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetExtraBorderContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetExtraBorderContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.CollisionShapeContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.CollisionShapeContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.CollisionShapeContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.CollisionShapeContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.CollisionShapeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCollisionShape();}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.CollisionShape = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.CollisionShapeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.CollisionShapeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.CollisionShapeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.CollisionShapeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.CollisionShapeContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetCollisionShapeContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetCollisionShapeContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetCollisionShapeContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetCollisionShapeContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetCollisionShapeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetCollisionShapeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetCollisionShapeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetCollisionShapeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCollisionShape(eventsFunctionContext.getArgument("Value"));
}
}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetCollisionShape = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetCollisionShapeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetCollisionShapeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetCollisionShapeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetCollisionShapeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetCollisionShapeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.RotateObjectContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.RotateObjectContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.RotateObjectContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.RotateObjectContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.RotateObjectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.RotateObjectContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.RotateObjectContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.RotateObjectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotateObject() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.RotateObjectContext.GDObjectObjects1[k] = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.RotateObjectContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.RotateObjectContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.RotateObject = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.RotateObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.RotateObjectContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.RotateObjectContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.RotateObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.RotateObjectContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetRotateObjectContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetRotateObjectContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetRotateObjectContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetRotateObjectContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetRotateObjectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !!eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetRotateObjectContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetRotateObjectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetRotateObjectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRotateObject(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetRotateObjectContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetRotateObjectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetRotateObjectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRotateObject(false);
}
}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetRotateObject = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetRotateObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetRotateObjectContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetRotateObjectContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetRotateObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior.prototype.SetRotateObjectContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("NavMeshPathfinding::NavMeshPathfindingBehavior", gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingBehavior.NavMeshPathfindingBehavior);
