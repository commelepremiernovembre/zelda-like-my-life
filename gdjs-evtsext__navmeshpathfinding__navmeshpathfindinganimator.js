
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator || {};

/**
 * Behavior generated from Navigation mesh pathfinding animator
 */
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator = class NavMeshPathfindingAnimator extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Animation = behaviorData.Animation !== undefined ? behaviorData.Animation : "";
    this._behaviorData.NavMeshPathfinding = behaviorData.NavMeshPathfinding !== undefined ? behaviorData.NavMeshPathfinding : "";
    this._behaviorData.IsScalingAnimation = behaviorData.IsScalingAnimation !== undefined ? behaviorData.IsScalingAnimation : true;
    this._behaviorData.AnimationName = behaviorData.AnimationName !== undefined ? behaviorData.AnimationName : "Walk";
    this._behaviorData.DirectionCount = behaviorData.DirectionCount !== undefined ? behaviorData.DirectionCount : Number("8") || 0;
    this._behaviorData.AngleOffset = behaviorData.AngleOffset !== undefined ? behaviorData.AngleOffset : Number("0") || 0;
    this._behaviorData.AnimationDirection = Number("0") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Animation !== undefined)
      this._behaviorData.Animation = behaviorOverriding.Animation;
    if (behaviorOverriding.NavMeshPathfinding !== undefined)
      this._behaviorData.NavMeshPathfinding = behaviorOverriding.NavMeshPathfinding;
    if (behaviorOverriding.IsScalingAnimation !== undefined)
      this._behaviorData.IsScalingAnimation = behaviorOverriding.IsScalingAnimation;
    if (behaviorOverriding.AnimationName !== undefined)
      this._behaviorData.AnimationName = behaviorOverriding.AnimationName;
    if (behaviorOverriding.DirectionCount !== undefined)
      this._behaviorData.DirectionCount = behaviorOverriding.DirectionCount;
    if (behaviorOverriding.AngleOffset !== undefined)
      this._behaviorData.AngleOffset = behaviorOverriding.AngleOffset;
    if (behaviorOverriding.AnimationDirection !== undefined)
      this._behaviorData.AnimationDirection = behaviorOverriding.AnimationDirection;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Animation: this._behaviorData.Animation,
    NavMeshPathfinding: this._behaviorData.NavMeshPathfinding,
    IsScalingAnimation: this._behaviorData.IsScalingAnimation,
    AnimationName: this._behaviorData.AnimationName,
    DirectionCount: this._behaviorData.DirectionCount,
    AngleOffset: this._behaviorData.AngleOffset,
    AnimationDirection: this._behaviorData.AnimationDirection,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Animation !== undefined)
      this._behaviorData.Animation = networkSyncData.props.Animation;
    if (networkSyncData.props.NavMeshPathfinding !== undefined)
      this._behaviorData.NavMeshPathfinding = networkSyncData.props.NavMeshPathfinding;
    if (networkSyncData.props.IsScalingAnimation !== undefined)
      this._behaviorData.IsScalingAnimation = networkSyncData.props.IsScalingAnimation;
    if (networkSyncData.props.AnimationName !== undefined)
      this._behaviorData.AnimationName = networkSyncData.props.AnimationName;
    if (networkSyncData.props.DirectionCount !== undefined)
      this._behaviorData.DirectionCount = networkSyncData.props.DirectionCount;
    if (networkSyncData.props.AngleOffset !== undefined)
      this._behaviorData.AngleOffset = networkSyncData.props.AngleOffset;
    if (networkSyncData.props.AnimationDirection !== undefined)
      this._behaviorData.AnimationDirection = networkSyncData.props.AnimationDirection;
  }

  // Properties:
  
  _getAnimation() {
    return this._behaviorData.Animation !== undefined ? this._behaviorData.Animation : "";
  }
  _setAnimation(newValue) {
    this._behaviorData.Animation = newValue;
  }
  _getNavMeshPathfinding() {
    return this._behaviorData.NavMeshPathfinding !== undefined ? this._behaviorData.NavMeshPathfinding : "";
  }
  _setNavMeshPathfinding(newValue) {
    this._behaviorData.NavMeshPathfinding = newValue;
  }
  _getIsScalingAnimation() {
    return this._behaviorData.IsScalingAnimation !== undefined ? this._behaviorData.IsScalingAnimation : true;
  }
  _setIsScalingAnimation(newValue) {
    this._behaviorData.IsScalingAnimation = newValue;
  }
  _toggleIsScalingAnimation() {
    this._setIsScalingAnimation(!this._getIsScalingAnimation());
  }
  _getAnimationName() {
    return this._behaviorData.AnimationName !== undefined ? this._behaviorData.AnimationName : "Walk";
  }
  _setAnimationName(newValue) {
    this._behaviorData.AnimationName = newValue;
  }
  _getDirectionCount() {
    return this._behaviorData.DirectionCount !== undefined ? this._behaviorData.DirectionCount : Number("8") || 0;
  }
  _setDirectionCount(newValue) {
    this._behaviorData.DirectionCount = newValue;
  }
  _getAngleOffset() {
    return this._behaviorData.AngleOffset !== undefined ? this._behaviorData.AngleOffset : Number("0") || 0;
  }
  _setAngleOffset(newValue) {
    this._behaviorData.AngleOffset = newValue;
  }
  _getAnimationDirection() {
    return this._behaviorData.AnimationDirection !== undefined ? this._behaviorData.AnimationDirection : Number("0") || 0;
  }
  _setAnimationDirection(newValue) {
    this._behaviorData.AnimationDirection = newValue;
  }
}

/**
 * Shared data generated from Navigation mesh pathfinding animator
 */
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.SharedData = class NavMeshPathfindingAnimatorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._NavMeshPathfinding_NavMeshPathfindingAnimatorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._NavMeshPathfinding_NavMeshPathfindingAnimatorSharedData = new gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.SharedData(
      initialData
    );
  }
  return instanceContainer._NavMeshPathfinding_NavMeshPathfindingAnimatorSharedData;
}

// Methods:
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.onActivateContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.onActivateContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.onActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.onActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.onActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.onActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.onActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetAnimationDirection((gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Direction(eventsFunctionContext)), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.onActivate = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "NavMeshPathfinding": this._getNavMeshPathfinding()
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

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.onActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.onActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.onActivateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsScalingAnimation() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetAnimationSpeedScale(eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs((( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DirectionDifference(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationDirection(), eventsFunctionContext))) > 0.5 + 0.03125);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetAnimationDirection(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("NavMeshPathfinding")).Speed(eventsFunctionContext) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).pauseAnimation();
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("NavMeshPathfinding")).Speed(eventsFunctionContext) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).resumeAnimation();
}
}

{ //Subevents
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("NewAnimationDirection", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1);
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Direction(eventsFunctionContext)));
}

{ //Subevents
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "NavMeshPathfinding": this._getNavMeshPathfinding()
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

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.AnimationNameContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.AnimationNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.AnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.AnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.AnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationName();}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.AnimationName = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "NavMeshPathfinding": this._getNavMeshPathfinding()
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

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.AnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.AnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.AnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.AnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.AnimationNameContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationName() != eventsFunctionContext.getArgument("Value") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.GDObjectObjects1[k] = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAnimationName(eventsFunctionContext.getArgument("Value"));
}
}
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationName() + gdjs.evtTools.common.toString(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationDirection()));
}
}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationName = function(Value, parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "NavMeshPathfinding": this._getNavMeshPathfinding()
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

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationNameContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.IsScalingAnimationContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.IsScalingAnimationContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.IsScalingAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.IsScalingAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsScalingAnimation() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1[k] = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.IsScalingAnimation = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "NavMeshPathfinding": this._getNavMeshPathfinding()
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

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.IsScalingAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.IsScalingAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.IsScalingAnimationContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsScalingAnimation(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationSpeedScale(1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !!eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsScalingAnimation(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetAnimationSpeedScale(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimation = function(Value, parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "NavMeshPathfinding": this._getNavMeshPathfinding()
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

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationSpeedScaleContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationSpeedScaleContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationSpeedScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationSpeedScale((gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("NavMeshPathfinding")).Speed(eventsFunctionContext)) / (gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("NavMeshPathfinding")).MaxSpeed(eventsFunctionContext)));
}
}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationSpeedScale = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "NavMeshPathfinding": this._getNavMeshPathfinding()
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

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationSpeedScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = ((( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("NavMeshPathfinding")).MovementAngle(eventsFunctionContext)) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleOffset()) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount() / 360;}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.Direction = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "NavMeshPathfinding": this._getNavMeshPathfinding()
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

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionDifferenceContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionDifferenceContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionDifferenceContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionDifferenceContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionDifferenceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = gdjs.evtTools.common.mod(gdjs.evtTools.common.mod(eventsFunctionContext.getArgument("Direction") - eventsFunctionContext.getArgument("OtherDirection"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount() / 2, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount()) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount() / 2;}
}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionDifference = function(Direction, OtherDirection, parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "NavMeshPathfinding": this._getNavMeshPathfinding()
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
if (argName === "Direction") return Direction;
if (argName === "OtherDirection") return OtherDirection;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionDifferenceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionDifferenceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionDifferenceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionDifferenceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.DirectionDifferenceContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.idToCallbackMap = new Map();
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AnimationElapsedTime", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAnimationDirection(gdjs.evtTools.common.mod(gdjs.evtTools.common.mod(Math.round(eventsFunctionContext.getArgument("Value")), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount()));
}
}
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).getAnimationElapsedTime()));
}
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationName() + gdjs.evtTools.common.toString(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationDirection()));
}
}
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationElapsedTime(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber());
}
}
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirection = function(Value, parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
, "NavMeshPathfinding": this._getNavMeshPathfinding()
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

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("NavMeshPathfinding::NavMeshPathfindingAnimator", gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingAnimator.NavMeshPathfindingAnimator);
