gdjs.Level_320riginalCode = {};
gdjs.Level_320riginalCode.localVariables = [];
gdjs.Level_320riginalCode.idToCallbackMap = new Map();
gdjs.Level_320riginalCode.GDFloorObjects1_1final = [];

gdjs.Level_320riginalCode.GDMindyObjects1_1final = [];

gdjs.Level_320riginalCode.GDMindyObjects1= [];
gdjs.Level_320riginalCode.GDMindyObjects2= [];
gdjs.Level_320riginalCode.GDMindyObjects3= [];
gdjs.Level_320riginalCode.GDMindyObjects4= [];
gdjs.Level_320riginalCode.GDBatObjects1= [];
gdjs.Level_320riginalCode.GDBatObjects2= [];
gdjs.Level_320riginalCode.GDBatObjects3= [];
gdjs.Level_320riginalCode.GDBatObjects4= [];
gdjs.Level_320riginalCode.GDTopBlockObjects1= [];
gdjs.Level_320riginalCode.GDTopBlockObjects2= [];
gdjs.Level_320riginalCode.GDTopBlockObjects3= [];
gdjs.Level_320riginalCode.GDTopBlockObjects4= [];
gdjs.Level_320riginalCode.GDBlockGrassObjects1= [];
gdjs.Level_320riginalCode.GDBlockGrassObjects2= [];
gdjs.Level_320riginalCode.GDBlockGrassObjects3= [];
gdjs.Level_320riginalCode.GDBlockGrassObjects4= [];
gdjs.Level_320riginalCode.GDBlockObjects1= [];
gdjs.Level_320riginalCode.GDBlockObjects2= [];
gdjs.Level_320riginalCode.GDBlockObjects3= [];
gdjs.Level_320riginalCode.GDBlockObjects4= [];
gdjs.Level_320riginalCode.GDBridgeObjects1= [];
gdjs.Level_320riginalCode.GDBridgeObjects2= [];
gdjs.Level_320riginalCode.GDBridgeObjects3= [];
gdjs.Level_320riginalCode.GDBridgeObjects4= [];
gdjs.Level_320riginalCode.GDFloorGrassObjects1= [];
gdjs.Level_320riginalCode.GDFloorGrassObjects2= [];
gdjs.Level_320riginalCode.GDFloorGrassObjects3= [];
gdjs.Level_320riginalCode.GDFloorGrassObjects4= [];
gdjs.Level_320riginalCode.GDFloorObjects1= [];
gdjs.Level_320riginalCode.GDFloorObjects2= [];
gdjs.Level_320riginalCode.GDFloorObjects3= [];
gdjs.Level_320riginalCode.GDFloorObjects4= [];
gdjs.Level_320riginalCode.GDTreeObjects1= [];
gdjs.Level_320riginalCode.GDTreeObjects2= [];
gdjs.Level_320riginalCode.GDTreeObjects3= [];
gdjs.Level_320riginalCode.GDTreeObjects4= [];
gdjs.Level_320riginalCode.GDRockObjects1= [];
gdjs.Level_320riginalCode.GDRockObjects2= [];
gdjs.Level_320riginalCode.GDRockObjects3= [];
gdjs.Level_320riginalCode.GDRockObjects4= [];
gdjs.Level_320riginalCode.GDWoodSignObjects1= [];
gdjs.Level_320riginalCode.GDWoodSignObjects2= [];
gdjs.Level_320riginalCode.GDWoodSignObjects3= [];
gdjs.Level_320riginalCode.GDWoodSignObjects4= [];
gdjs.Level_320riginalCode.GDSmallObstacleObjects1= [];
gdjs.Level_320riginalCode.GDSmallObstacleObjects2= [];
gdjs.Level_320riginalCode.GDSmallObstacleObjects3= [];
gdjs.Level_320riginalCode.GDSmallObstacleObjects4= [];
gdjs.Level_320riginalCode.GDTileRowObstacleObjects1= [];
gdjs.Level_320riginalCode.GDTileRowObstacleObjects2= [];
gdjs.Level_320riginalCode.GDTileRowObstacleObjects3= [];
gdjs.Level_320riginalCode.GDTileRowObstacleObjects4= [];
gdjs.Level_320riginalCode.GDTileColumnObstacleObjects1= [];
gdjs.Level_320riginalCode.GDTileColumnObstacleObjects2= [];
gdjs.Level_320riginalCode.GDTileColumnObstacleObjects3= [];
gdjs.Level_320riginalCode.GDTileColumnObstacleObjects4= [];
gdjs.Level_320riginalCode.GDTileObstacleObjects1= [];
gdjs.Level_320riginalCode.GDTileObstacleObjects2= [];
gdjs.Level_320riginalCode.GDTileObstacleObjects3= [];
gdjs.Level_320riginalCode.GDTileObstacleObjects4= [];
gdjs.Level_320riginalCode.GDNavMeshObjects1= [];
gdjs.Level_320riginalCode.GDNavMeshObjects2= [];
gdjs.Level_320riginalCode.GDNavMeshObjects3= [];
gdjs.Level_320riginalCode.GDNavMeshObjects4= [];
gdjs.Level_320riginalCode.GDRainEmitterObjects1= [];
gdjs.Level_320riginalCode.GDRainEmitterObjects2= [];
gdjs.Level_320riginalCode.GDRainEmitterObjects3= [];
gdjs.Level_320riginalCode.GDRainEmitterObjects4= [];
gdjs.Level_320riginalCode.GDWeatherDebugTextObjects1= [];
gdjs.Level_320riginalCode.GDWeatherDebugTextObjects2= [];
gdjs.Level_320riginalCode.GDWeatherDebugTextObjects3= [];
gdjs.Level_320riginalCode.GDWeatherDebugTextObjects4= [];
gdjs.Level_320riginalCode.GDHeatDisplacementTextureObjects1= [];
gdjs.Level_320riginalCode.GDHeatDisplacementTextureObjects2= [];
gdjs.Level_320riginalCode.GDHeatDisplacementTextureObjects3= [];
gdjs.Level_320riginalCode.GDHeatDisplacementTextureObjects4= [];


gdjs.Level_320riginalCode.mapOfGDgdjs_9546Level_9595320riginalCode_9546GDNavMeshObjects1Objects = Hashtable.newFrom({"NavMesh": gdjs.Level_320riginalCode.GDNavMeshObjects1});
gdjs.Level_320riginalCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.Level_320riginalCode.GDMindyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NavMesh"), gdjs.Level_320riginalCode.GDNavMeshObjects1);
{for(var i = 0, len = gdjs.Level_320riginalCode.GDMindyObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDMindyObjects1[i].getBehavior("NavMeshPathfindingBehavior").SetDestination((gdjs.Level_320riginalCode.GDMindyObjects1[i].getPointX("")), (gdjs.Level_320riginalCode.GDMindyObjects1[i].getPointY("")), null);
}
}
{for(var i = 0, len = gdjs.Level_320riginalCode.GDMindyObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDMindyObjects1[i].getBehavior("NavMeshPathfindingBehavior").DrawNavMesh(gdjs.Level_320riginalCode.mapOfGDgdjs_9546Level_9595320riginalCode_9546GDNavMeshObjects1Objects, null);
}
}
}

}


};gdjs.Level_320riginalCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_320riginalCode.GDMindyObjects3);
{for(var i = 0, len = gdjs.Level_320riginalCode.GDMindyObjects3.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDMindyObjects3[i].activateBehavior("NavMeshPathfindingBehavior", true);
}
}
{for(var i = 0, len = gdjs.Level_320riginalCode.GDMindyObjects3.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDMindyObjects3[i].getBehavior("NavMeshPathfindingBehavior").SetDestination(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_320riginalCode.GDMindyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_320riginalCode.GDMindyObjects2.length;i<l;++i) {
    if ( gdjs.Level_320riginalCode.GDMindyObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Level_320riginalCode.GDMindyObjects2[k] = gdjs.Level_320riginalCode.GDMindyObjects2[i];
        ++k;
    }
}
gdjs.Level_320riginalCode.GDMindyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_320riginalCode.GDMindyObjects2 */
{for(var i = 0, len = gdjs.Level_320riginalCode.GDMindyObjects2.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDMindyObjects2[i].activateBehavior("NavMeshPathfindingBehavior", false);
}
}
}

}


};gdjs.Level_320riginalCode.mapOfGDgdjs_9546Level_9595320riginalCode_9546GDMindyObjects1Objects = Hashtable.newFrom({"Mindy": gdjs.Level_320riginalCode.GDMindyObjects1});
gdjs.Level_320riginalCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_320riginalCode.GDMindyObjects1);
{gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.func(runtimeScene, gdjs.Level_320riginalCode.mapOfGDgdjs_9546Level_9595320riginalCode_9546GDMindyObjects1Objects, "NavMeshPathfindingBehavior", "TopDownMovement", "TopDownMovementAnimator", "NavMeshPathfindingAnimator", null);
}
}

}


};gdjs.Level_320riginalCode.eventsList3 = function(runtimeScene) {

{


gdjs.Level_320riginalCode.eventsList1(runtimeScene);
}


{


gdjs.Level_320riginalCode.eventsList2(runtimeScene);
}


};gdjs.Level_320riginalCode.mapOfGDgdjs_9546Level_9595320riginalCode_9546GDSmallObstacleObjects2ObjectsGDgdjs_9546Level_9595320riginalCode_9546GDTileRowObstacleObjects2ObjectsGDgdjs_9546Level_9595320riginalCode_9546GDTileColumnObstacleObjects2ObjectsGDgdjs_9546Level_9595320riginalCode_9546GDTileObstacleObjects2Objects = Hashtable.newFrom({"SmallObstacle": gdjs.Level_320riginalCode.GDSmallObstacleObjects2, "TileRowObstacle": gdjs.Level_320riginalCode.GDTileRowObstacleObjects2, "TileColumnObstacle": gdjs.Level_320riginalCode.GDTileColumnObstacleObjects2, "TileObstacle": gdjs.Level_320riginalCode.GDTileObstacleObjects2});
gdjs.Level_320riginalCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_320riginalCode.GDMindyObjects2);
gdjs.copyArray(runtimeScene.getObjects("SmallObstacle"), gdjs.Level_320riginalCode.GDSmallObstacleObjects2);
gdjs.copyArray(runtimeScene.getObjects("TileColumnObstacle"), gdjs.Level_320riginalCode.GDTileColumnObstacleObjects2);
gdjs.copyArray(runtimeScene.getObjects("TileObstacle"), gdjs.Level_320riginalCode.GDTileObstacleObjects2);
gdjs.copyArray(runtimeScene.getObjects("TileRowObstacle"), gdjs.Level_320riginalCode.GDTileRowObstacleObjects2);
{for(var i = 0, len = gdjs.Level_320riginalCode.GDMindyObjects2.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDMindyObjects2[i].separateFromObjectsList(gdjs.Level_320riginalCode.mapOfGDgdjs_9546Level_9595320riginalCode_9546GDSmallObstacleObjects2ObjectsGDgdjs_9546Level_9595320riginalCode_9546GDTileRowObstacleObjects2ObjectsGDgdjs_9546Level_9595320riginalCode_9546GDTileColumnObstacleObjects2ObjectsGDgdjs_9546Level_9595320riginalCode_9546GDTileObstacleObjects2Objects, false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_320riginalCode.GDMindyObjects1);
{for(var i = 0, len = gdjs.Level_320riginalCode.GDMindyObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDMindyObjects1[i].getBehavior("SmoothCamera").MoveCameraCloser(null);
}
}
{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.func(runtimeScene, "", 0, "Level1", 0, true, true, false, false, null);
}
{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.func(runtimeScene, "", 0, "Level2", 0, true, true, false, false, null);
}
}

}


};gdjs.Level_320riginalCode.mapOfGDgdjs_9546Level_9595320riginalCode_9546GDMindyObjects1Objects = Hashtable.newFrom({"Mindy": gdjs.Level_320riginalCode.GDMindyObjects1});
gdjs.Level_320riginalCode.mapOfGDgdjs_9546Level_9595320riginalCode_9546GDBatObjects1Objects = Hashtable.newFrom({"Bat": gdjs.Level_320riginalCode.GDBatObjects1});
gdjs.Level_320riginalCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bat"), gdjs.Level_320riginalCode.GDBatObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_320riginalCode.GDMindyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Level_320riginalCode.mapOfGDgdjs_9546Level_9595320riginalCode_9546GDMindyObjects1Objects, gdjs.Level_320riginalCode.mapOfGDgdjs_9546Level_9595320riginalCode_9546GDBatObjects1Objects, 100, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_320riginalCode.GDBatObjects1 */
/* Reuse gdjs.Level_320riginalCode.GDMindyObjects1 */
{for(var i = 0, len = gdjs.Level_320riginalCode.GDBatObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDBatObjects1[i].addForceTowardPosition((( gdjs.Level_320riginalCode.GDMindyObjects1.length === 0 ) ? 0 :gdjs.Level_320riginalCode.GDMindyObjects1[0].getPointX("Head")), (( gdjs.Level_320riginalCode.GDMindyObjects1.length === 0 ) ? 0 :gdjs.Level_320riginalCode.GDMindyObjects1[0].getPointY("Head")), 150, 0);
}
}
}

}


};gdjs.Level_320riginalCode.mapOfGDgdjs_9546Level_9595320riginalCode_9546GDMindyObjects2Objects = Hashtable.newFrom({"Mindy": gdjs.Level_320riginalCode.GDMindyObjects2});
gdjs.Level_320riginalCode.mapOfGDgdjs_9546Level_9595320riginalCode_9546GDMindyObjects2Objects = Hashtable.newFrom({"Mindy": gdjs.Level_320riginalCode.GDMindyObjects2});
gdjs.Level_320riginalCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FloorGrass"), gdjs.Level_320riginalCode.GDFloorGrassObjects2);
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_320riginalCode.GDMindyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CharacterMovement__IsMoving.func(runtimeScene, gdjs.Level_320riginalCode.mapOfGDgdjs_9546Level_9595320riginalCode_9546GDMindyObjects2Objects, "NavMeshPathfindingBehavior", "TopDownMovement", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_320riginalCode.GDFloorGrassObjects2.length;i<l;++i) {
    if ( gdjs.Level_320riginalCode.GDFloorGrassObjects2[i].isCollidingWithPoint((( gdjs.Level_320riginalCode.GDMindyObjects2.length === 0 ) ? 0 :gdjs.Level_320riginalCode.GDMindyObjects2[0].getPointX("Foot")), (( gdjs.Level_320riginalCode.GDMindyObjects2.length === 0 ) ? 0 :gdjs.Level_320riginalCode.GDMindyObjects2[0].getPointY("Foot"))) ) {
        isConditionTrue_0 = true;
        gdjs.Level_320riginalCode.GDFloorGrassObjects2[k] = gdjs.Level_320riginalCode.GDFloorGrassObjects2[i];
        ++k;
    }
}
gdjs.Level_320riginalCode.GDFloorGrassObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21167196);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "grass_light_steps.mp3", 1, true, 5, 1);
}
}

}


{

gdjs.Level_320riginalCode.GDFloorObjects1.length = 0;

gdjs.Level_320riginalCode.GDMindyObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Level_320riginalCode.GDFloorObjects1_1final.length = 0;
gdjs.Level_320riginalCode.GDMindyObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.Level_320riginalCode.GDFloorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_320riginalCode.GDMindyObjects2);
for (var i = 0, k = 0, l = gdjs.Level_320riginalCode.GDFloorObjects2.length;i<l;++i) {
    if ( gdjs.Level_320riginalCode.GDFloorObjects2[i].isCollidingWithPoint((( gdjs.Level_320riginalCode.GDMindyObjects2.length === 0 ) ? 0 :gdjs.Level_320riginalCode.GDMindyObjects2[0].getPointX("Foot")), (( gdjs.Level_320riginalCode.GDMindyObjects2.length === 0 ) ? 0 :gdjs.Level_320riginalCode.GDMindyObjects2[0].getPointY("Foot"))) ) {
        isConditionTrue_1 = true;
        gdjs.Level_320riginalCode.GDFloorObjects2[k] = gdjs.Level_320riginalCode.GDFloorObjects2[i];
        ++k;
    }
}
gdjs.Level_320riginalCode.GDFloorObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_320riginalCode.GDFloorObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_320riginalCode.GDFloorObjects1_1final.indexOf(gdjs.Level_320riginalCode.GDFloorObjects2[j]) === -1 )
            gdjs.Level_320riginalCode.GDFloorObjects1_1final.push(gdjs.Level_320riginalCode.GDFloorObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Level_320riginalCode.GDMindyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_320riginalCode.GDMindyObjects1_1final.indexOf(gdjs.Level_320riginalCode.GDMindyObjects2[j]) === -1 )
            gdjs.Level_320riginalCode.GDMindyObjects1_1final.push(gdjs.Level_320riginalCode.GDMindyObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_320riginalCode.GDMindyObjects2);
isConditionTrue_1 = !(gdjs.evtsExt__CharacterMovement__IsMoving.func(runtimeScene, gdjs.Level_320riginalCode.mapOfGDgdjs_9546Level_9595320riginalCode_9546GDMindyObjects2Objects, "NavMeshPathfindingBehavior", "TopDownMovement", null));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_320riginalCode.GDMindyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Level_320riginalCode.GDMindyObjects1_1final.indexOf(gdjs.Level_320riginalCode.GDMindyObjects2[j]) === -1 )
            gdjs.Level_320riginalCode.GDMindyObjects1_1final.push(gdjs.Level_320riginalCode.GDMindyObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_320riginalCode.GDFloorObjects1_1final, gdjs.Level_320riginalCode.GDFloorObjects1);
gdjs.copyArray(gdjs.Level_320riginalCode.GDMindyObjects1_1final, gdjs.Level_320riginalCode.GDMindyObjects1);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
}

}


};gdjs.Level_320riginalCode.asyncCallback21171228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_320riginalCode.localVariables);
gdjs.Level_320riginalCode.localVariables.length = 0;
}
gdjs.Level_320riginalCode.idToCallbackMap.set(21171228, gdjs.Level_320riginalCode.asyncCallback21171228);
gdjs.Level_320riginalCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_320riginalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "WeatherReq", runtimeScene.getScene().getVariables().getFromIndex(9), null), (runtimeScene) => (gdjs.Level_320riginalCode.asyncCallback21171228(runtimeScene, asyncObjectsList)), 21171228, asyncObjectsList);
}
}

}


};gdjs.Level_320riginalCode.asyncCallback21173252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_320riginalCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("");
}
gdjs.Level_320riginalCode.localVariables.length = 0;
}
gdjs.Level_320riginalCode.idToCallbackMap.set(21173252, gdjs.Level_320riginalCode.asyncCallback21173252);
gdjs.Level_320riginalCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_320riginalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseJSON.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9), runtimeScene.getScene().getVariables().getFromIndex(8), null), (runtimeScene) => (gdjs.Level_320riginalCode.asyncCallback21173252(runtimeScene, asyncObjectsList)), 21173252, asyncObjectsList);
}
}

}


};gdjs.Level_320riginalCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()) > 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_320riginalCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.Level_320riginalCode.asyncCallback21172068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_320riginalCode.localVariables);

{ //Subevents
gdjs.Level_320riginalCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Level_320riginalCode.localVariables.length = 0;
}
gdjs.Level_320riginalCode.idToCallbackMap.set(21172068, gdjs.Level_320riginalCode.asyncCallback21172068);
gdjs.Level_320riginalCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_320riginalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseText.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9), runtimeScene.getScene().getVariables().getFromIndex(5), null), (runtimeScene) => (gdjs.Level_320riginalCode.asyncCallback21172068(runtimeScene, asyncObjectsList)), 21172068, asyncObjectsList);
}
}

}


};gdjs.Level_320riginalCode.eventsList11 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour") < 6);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour") >= 21);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).setString("night");
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{runtimeScene.getScene().getVariables().getFromIndex(7).setString("sun");
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Level_320riginalCode.eventsList12 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour") < 6);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour") >= 21);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).setString("night");
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{runtimeScene.getScene().getVariables().getFromIndex(7).setString("sun");
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Level_320riginalCode.eventsList13 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 61);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 63);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 65);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 66);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 67);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 80);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 81);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 82);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).setString("rain");
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() >= 32);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).setString("heatwave");
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {

{ //Subevents
gdjs.Level_320riginalCode.eventsList11(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {

{ //Subevents
gdjs.Level_320riginalCode.eventsList12(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Level_320riginalCode.eventsList14 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (0 < 6);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (0 >= 21);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).setString("night");
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{runtimeScene.getScene().getVariables().getFromIndex(7).setString("sun");
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Level_320riginalCode.eventsList15 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(8).getChild("weather").getChild(0).getChild("main").getAsString() == "Rain");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(8).getChild("weather").getChild(0).getChild("main").getAsString() == "Drizzle");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).setString("rain");
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getChild("weather").getChild(0).getChild("main").getAsString() == "Clear");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {

{ //Subevents
gdjs.Level_320riginalCode.eventsList14(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() >= 32);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).setString("heatwave");
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{runtimeScene.getScene().getVariables().getFromIndex(7).setString("unknown");
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Level_320riginalCode.eventsList16 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() == "0");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("REQUEST_FAILED");
}
}

}


};gdjs.Level_320riginalCode.asyncCallback21197588 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_320riginalCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.common.toString(gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9), null)));
}

{ //Subevents
gdjs.Level_320riginalCode.eventsList16(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Level_320riginalCode.localVariables.length = 0;
}
gdjs.Level_320riginalCode.idToCallbackMap.set(21197588, gdjs.Level_320riginalCode.asyncCallback21197588);
gdjs.Level_320riginalCode.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_320riginalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseText.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9), runtimeScene.getScene().getVariables().getFromIndex(5), null), (runtimeScene) => (gdjs.Level_320riginalCode.asyncCallback21197588(runtimeScene, asyncObjectsList)), 21197588, asyncObjectsList);
}
}

}


};gdjs.Level_320riginalCode.eventsList18 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_320riginalCode.GDMindyObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_320riginalCode.GDMindyObjects1.length !== 0 ? gdjs.Level_320riginalCode.GDMindyObjects1[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Obstacle");
}

{ //Subevents
gdjs.Level_320riginalCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Night", "false", false);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Godray", "false", false);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Night", "false", false);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Godray", "false", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "HeatDistortion", "false", false);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}
}

}


{


gdjs.Level_320riginalCode.eventsList3(runtimeScene);
}


{


gdjs.Level_320riginalCode.eventsList4(runtimeScene);
}


{


gdjs.Level_320riginalCode.eventsList5(runtimeScene);
}


{


gdjs.Level_320riginalCode.eventsList6(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__AdvancedHTTP__SetRequestURL.func(runtimeScene, "https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&current_weather=true&timezone=Europe%2FParis", "WeatherReq", null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "WeatherReq", "GET", null);
}
{gdjs.evtsExt__AdvancedHTTP__UseCORSBypass.func(runtimeScene, "WeatherReq", false, null);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WeatherUpdateTimer");
}

{ //Subevents
gdjs.Level_320riginalCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9), null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9), null) == 200;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_320riginalCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(8), "current_weather");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("current_weather").getChild("temperature").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("current_weather").getChild("weathercode").getAsNumber());
}

{ //Subevents
gdjs.Level_320riginalCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(8), "weather");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("main").getChild("temp").getAsNumber());
}

{ //Subevents
gdjs.Level_320riginalCode.eventsList15(runtimeScene);} //End of subevents
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "rain");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RainEmitter"), gdjs.Level_320riginalCode.GDRainEmitterObjects1);
{for(var i = 0, len = gdjs.Level_320riginalCode.GDRainEmitterObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDRainEmitterObjects1[i].setFlow(400);
}
}
{for(var i = 0, len = gdjs.Level_320riginalCode.GDRainEmitterObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDRainEmitterObjects1[i].startEmission();
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("RainEmitter"), gdjs.Level_320riginalCode.GDRainEmitterObjects1);
{for(var i = 0, len = gdjs.Level_320riginalCode.GDRainEmitterObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDRainEmitterObjects1[i].stopEmission();
}
}
{for(var i = 0, len = gdjs.Level_320riginalCode.GDRainEmitterObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDRainEmitterObjects1[i].setFlow(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "sun");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Night", "false", false);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Godray", "true", false);
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "", "Godray", "gain", 0.6);
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "heatwave");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Level_320riginalCode.GDBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.Level_320riginalCode.GDRockObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopBlock"), gdjs.Level_320riginalCode.GDTopBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tree"), gdjs.Level_320riginalCode.GDTreeObjects1);
gdjs.copyArray(runtimeScene.getObjects("WoodSign"), gdjs.Level_320riginalCode.GDWoodSignObjects1);
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Night", "no", false);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Godray", "yes", false);
}
{/* Mismatched object type - skipped. */}
{for(var i = 0, len = gdjs.Level_320riginalCode.GDBlockObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDBlockObjects1[i].setColor("255;150;100");
}
}
{for(var i = 0, len = gdjs.Level_320riginalCode.GDTopBlockObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDTopBlockObjects1[i].setColor("255;150;100");
}
}
{for(var i = 0, len = gdjs.Level_320riginalCode.GDTreeObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDTreeObjects1[i].setColor("255;150;100");
}
}
{for(var i = 0, len = gdjs.Level_320riginalCode.GDRockObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDRockObjects1[i].setColor("255;150;100");
}
}
{for(var i = 0, len = gdjs.Level_320riginalCode.GDWoodSignObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDWoodSignObjects1[i].setColor("255;150;100");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Level_320riginalCode.GDBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.Level_320riginalCode.GDRockObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopBlock"), gdjs.Level_320riginalCode.GDTopBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tree"), gdjs.Level_320riginalCode.GDTreeObjects1);
gdjs.copyArray(runtimeScene.getObjects("WoodSign"), gdjs.Level_320riginalCode.GDWoodSignObjects1);
{/* Mismatched object type - skipped. */}
{for(var i = 0, len = gdjs.Level_320riginalCode.GDBlockObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDBlockObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.Level_320riginalCode.GDTopBlockObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDTopBlockObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.Level_320riginalCode.GDTreeObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDTreeObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.Level_320riginalCode.GDRockObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDRockObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.Level_320riginalCode.GDWoodSignObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDWoodSignObjects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "rain");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Night", "false", false);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "HeatDistortion", "false", false);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Godray", "false", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "night");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Night", "true", false);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "HeatDistortion", "false", false);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Godray", "false", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = !(gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9), null));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9), null) >= 400;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_320riginalCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("WeatherDebugText"), gdjs.Level_320riginalCode.GDWeatherDebugTextObjects1);
{for(var i = 0, len = gdjs.Level_320riginalCode.GDWeatherDebugTextObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDWeatherDebugTextObjects1[i].getBehavior("Text").setText("Météo: " + runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() + gdjs.evtTools.string.newLine() + "Temp: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber()) + gdjs.evtTools.string.newLine() + "RespLen: " + gdjs.evtTools.common.toString(gdjs.evtTools.string.strLen(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString())) + gdjs.evtTools.string.newLine() + "Err: " + runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "HeatDistortion", "true", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("heatwave");
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(40);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() != "");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RainEmitter"), gdjs.Level_320riginalCode.GDRainEmitterObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(7).setString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
{for(var i = 0, len = gdjs.Level_320riginalCode.GDRainEmitterObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDRainEmitterObjects1[i].setFlow(0);
}
}
{for(var i = 0, len = gdjs.Level_320riginalCode.GDRainEmitterObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDRainEmitterObjects1[i].stopEmission();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_320riginalCode.GDMindyObjects1);
{for(var i = 0, len = gdjs.Level_320riginalCode.GDMindyObjects1.length ;i < len;++i) {
    gdjs.Level_320riginalCode.GDMindyObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour") < 6);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour") >= 21);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "rain");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{/* Unknown object - skipped. */}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "unknown");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{/* Unknown object - skipped. */}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{/* Unknown object - skipped. */}
elseEventsChainSatisfied = true;
}
}

}

}

};

gdjs.Level_320riginalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_320riginalCode.GDMindyObjects1.length = 0;
gdjs.Level_320riginalCode.GDMindyObjects2.length = 0;
gdjs.Level_320riginalCode.GDMindyObjects3.length = 0;
gdjs.Level_320riginalCode.GDMindyObjects4.length = 0;
gdjs.Level_320riginalCode.GDBatObjects1.length = 0;
gdjs.Level_320riginalCode.GDBatObjects2.length = 0;
gdjs.Level_320riginalCode.GDBatObjects3.length = 0;
gdjs.Level_320riginalCode.GDBatObjects4.length = 0;
gdjs.Level_320riginalCode.GDTopBlockObjects1.length = 0;
gdjs.Level_320riginalCode.GDTopBlockObjects2.length = 0;
gdjs.Level_320riginalCode.GDTopBlockObjects3.length = 0;
gdjs.Level_320riginalCode.GDTopBlockObjects4.length = 0;
gdjs.Level_320riginalCode.GDBlockGrassObjects1.length = 0;
gdjs.Level_320riginalCode.GDBlockGrassObjects2.length = 0;
gdjs.Level_320riginalCode.GDBlockGrassObjects3.length = 0;
gdjs.Level_320riginalCode.GDBlockGrassObjects4.length = 0;
gdjs.Level_320riginalCode.GDBlockObjects1.length = 0;
gdjs.Level_320riginalCode.GDBlockObjects2.length = 0;
gdjs.Level_320riginalCode.GDBlockObjects3.length = 0;
gdjs.Level_320riginalCode.GDBlockObjects4.length = 0;
gdjs.Level_320riginalCode.GDBridgeObjects1.length = 0;
gdjs.Level_320riginalCode.GDBridgeObjects2.length = 0;
gdjs.Level_320riginalCode.GDBridgeObjects3.length = 0;
gdjs.Level_320riginalCode.GDBridgeObjects4.length = 0;
gdjs.Level_320riginalCode.GDFloorGrassObjects1.length = 0;
gdjs.Level_320riginalCode.GDFloorGrassObjects2.length = 0;
gdjs.Level_320riginalCode.GDFloorGrassObjects3.length = 0;
gdjs.Level_320riginalCode.GDFloorGrassObjects4.length = 0;
gdjs.Level_320riginalCode.GDFloorObjects1.length = 0;
gdjs.Level_320riginalCode.GDFloorObjects2.length = 0;
gdjs.Level_320riginalCode.GDFloorObjects3.length = 0;
gdjs.Level_320riginalCode.GDFloorObjects4.length = 0;
gdjs.Level_320riginalCode.GDTreeObjects1.length = 0;
gdjs.Level_320riginalCode.GDTreeObjects2.length = 0;
gdjs.Level_320riginalCode.GDTreeObjects3.length = 0;
gdjs.Level_320riginalCode.GDTreeObjects4.length = 0;
gdjs.Level_320riginalCode.GDRockObjects1.length = 0;
gdjs.Level_320riginalCode.GDRockObjects2.length = 0;
gdjs.Level_320riginalCode.GDRockObjects3.length = 0;
gdjs.Level_320riginalCode.GDRockObjects4.length = 0;
gdjs.Level_320riginalCode.GDWoodSignObjects1.length = 0;
gdjs.Level_320riginalCode.GDWoodSignObjects2.length = 0;
gdjs.Level_320riginalCode.GDWoodSignObjects3.length = 0;
gdjs.Level_320riginalCode.GDWoodSignObjects4.length = 0;
gdjs.Level_320riginalCode.GDSmallObstacleObjects1.length = 0;
gdjs.Level_320riginalCode.GDSmallObstacleObjects2.length = 0;
gdjs.Level_320riginalCode.GDSmallObstacleObjects3.length = 0;
gdjs.Level_320riginalCode.GDSmallObstacleObjects4.length = 0;
gdjs.Level_320riginalCode.GDTileRowObstacleObjects1.length = 0;
gdjs.Level_320riginalCode.GDTileRowObstacleObjects2.length = 0;
gdjs.Level_320riginalCode.GDTileRowObstacleObjects3.length = 0;
gdjs.Level_320riginalCode.GDTileRowObstacleObjects4.length = 0;
gdjs.Level_320riginalCode.GDTileColumnObstacleObjects1.length = 0;
gdjs.Level_320riginalCode.GDTileColumnObstacleObjects2.length = 0;
gdjs.Level_320riginalCode.GDTileColumnObstacleObjects3.length = 0;
gdjs.Level_320riginalCode.GDTileColumnObstacleObjects4.length = 0;
gdjs.Level_320riginalCode.GDTileObstacleObjects1.length = 0;
gdjs.Level_320riginalCode.GDTileObstacleObjects2.length = 0;
gdjs.Level_320riginalCode.GDTileObstacleObjects3.length = 0;
gdjs.Level_320riginalCode.GDTileObstacleObjects4.length = 0;
gdjs.Level_320riginalCode.GDNavMeshObjects1.length = 0;
gdjs.Level_320riginalCode.GDNavMeshObjects2.length = 0;
gdjs.Level_320riginalCode.GDNavMeshObjects3.length = 0;
gdjs.Level_320riginalCode.GDNavMeshObjects4.length = 0;
gdjs.Level_320riginalCode.GDRainEmitterObjects1.length = 0;
gdjs.Level_320riginalCode.GDRainEmitterObjects2.length = 0;
gdjs.Level_320riginalCode.GDRainEmitterObjects3.length = 0;
gdjs.Level_320riginalCode.GDRainEmitterObjects4.length = 0;
gdjs.Level_320riginalCode.GDWeatherDebugTextObjects1.length = 0;
gdjs.Level_320riginalCode.GDWeatherDebugTextObjects2.length = 0;
gdjs.Level_320riginalCode.GDWeatherDebugTextObjects3.length = 0;
gdjs.Level_320riginalCode.GDWeatherDebugTextObjects4.length = 0;
gdjs.Level_320riginalCode.GDHeatDisplacementTextureObjects1.length = 0;
gdjs.Level_320riginalCode.GDHeatDisplacementTextureObjects2.length = 0;
gdjs.Level_320riginalCode.GDHeatDisplacementTextureObjects3.length = 0;
gdjs.Level_320riginalCode.GDHeatDisplacementTextureObjects4.length = 0;

gdjs.Level_320riginalCode.eventsList18(runtimeScene);
gdjs.Level_320riginalCode.GDMindyObjects1.length = 0;
gdjs.Level_320riginalCode.GDMindyObjects2.length = 0;
gdjs.Level_320riginalCode.GDMindyObjects3.length = 0;
gdjs.Level_320riginalCode.GDMindyObjects4.length = 0;
gdjs.Level_320riginalCode.GDBatObjects1.length = 0;
gdjs.Level_320riginalCode.GDBatObjects2.length = 0;
gdjs.Level_320riginalCode.GDBatObjects3.length = 0;
gdjs.Level_320riginalCode.GDBatObjects4.length = 0;
gdjs.Level_320riginalCode.GDTopBlockObjects1.length = 0;
gdjs.Level_320riginalCode.GDTopBlockObjects2.length = 0;
gdjs.Level_320riginalCode.GDTopBlockObjects3.length = 0;
gdjs.Level_320riginalCode.GDTopBlockObjects4.length = 0;
gdjs.Level_320riginalCode.GDBlockGrassObjects1.length = 0;
gdjs.Level_320riginalCode.GDBlockGrassObjects2.length = 0;
gdjs.Level_320riginalCode.GDBlockGrassObjects3.length = 0;
gdjs.Level_320riginalCode.GDBlockGrassObjects4.length = 0;
gdjs.Level_320riginalCode.GDBlockObjects1.length = 0;
gdjs.Level_320riginalCode.GDBlockObjects2.length = 0;
gdjs.Level_320riginalCode.GDBlockObjects3.length = 0;
gdjs.Level_320riginalCode.GDBlockObjects4.length = 0;
gdjs.Level_320riginalCode.GDBridgeObjects1.length = 0;
gdjs.Level_320riginalCode.GDBridgeObjects2.length = 0;
gdjs.Level_320riginalCode.GDBridgeObjects3.length = 0;
gdjs.Level_320riginalCode.GDBridgeObjects4.length = 0;
gdjs.Level_320riginalCode.GDFloorGrassObjects1.length = 0;
gdjs.Level_320riginalCode.GDFloorGrassObjects2.length = 0;
gdjs.Level_320riginalCode.GDFloorGrassObjects3.length = 0;
gdjs.Level_320riginalCode.GDFloorGrassObjects4.length = 0;
gdjs.Level_320riginalCode.GDFloorObjects1.length = 0;
gdjs.Level_320riginalCode.GDFloorObjects2.length = 0;
gdjs.Level_320riginalCode.GDFloorObjects3.length = 0;
gdjs.Level_320riginalCode.GDFloorObjects4.length = 0;
gdjs.Level_320riginalCode.GDTreeObjects1.length = 0;
gdjs.Level_320riginalCode.GDTreeObjects2.length = 0;
gdjs.Level_320riginalCode.GDTreeObjects3.length = 0;
gdjs.Level_320riginalCode.GDTreeObjects4.length = 0;
gdjs.Level_320riginalCode.GDRockObjects1.length = 0;
gdjs.Level_320riginalCode.GDRockObjects2.length = 0;
gdjs.Level_320riginalCode.GDRockObjects3.length = 0;
gdjs.Level_320riginalCode.GDRockObjects4.length = 0;
gdjs.Level_320riginalCode.GDWoodSignObjects1.length = 0;
gdjs.Level_320riginalCode.GDWoodSignObjects2.length = 0;
gdjs.Level_320riginalCode.GDWoodSignObjects3.length = 0;
gdjs.Level_320riginalCode.GDWoodSignObjects4.length = 0;
gdjs.Level_320riginalCode.GDSmallObstacleObjects1.length = 0;
gdjs.Level_320riginalCode.GDSmallObstacleObjects2.length = 0;
gdjs.Level_320riginalCode.GDSmallObstacleObjects3.length = 0;
gdjs.Level_320riginalCode.GDSmallObstacleObjects4.length = 0;
gdjs.Level_320riginalCode.GDTileRowObstacleObjects1.length = 0;
gdjs.Level_320riginalCode.GDTileRowObstacleObjects2.length = 0;
gdjs.Level_320riginalCode.GDTileRowObstacleObjects3.length = 0;
gdjs.Level_320riginalCode.GDTileRowObstacleObjects4.length = 0;
gdjs.Level_320riginalCode.GDTileColumnObstacleObjects1.length = 0;
gdjs.Level_320riginalCode.GDTileColumnObstacleObjects2.length = 0;
gdjs.Level_320riginalCode.GDTileColumnObstacleObjects3.length = 0;
gdjs.Level_320riginalCode.GDTileColumnObstacleObjects4.length = 0;
gdjs.Level_320riginalCode.GDTileObstacleObjects1.length = 0;
gdjs.Level_320riginalCode.GDTileObstacleObjects2.length = 0;
gdjs.Level_320riginalCode.GDTileObstacleObjects3.length = 0;
gdjs.Level_320riginalCode.GDTileObstacleObjects4.length = 0;
gdjs.Level_320riginalCode.GDNavMeshObjects1.length = 0;
gdjs.Level_320riginalCode.GDNavMeshObjects2.length = 0;
gdjs.Level_320riginalCode.GDNavMeshObjects3.length = 0;
gdjs.Level_320riginalCode.GDNavMeshObjects4.length = 0;
gdjs.Level_320riginalCode.GDRainEmitterObjects1.length = 0;
gdjs.Level_320riginalCode.GDRainEmitterObjects2.length = 0;
gdjs.Level_320riginalCode.GDRainEmitterObjects3.length = 0;
gdjs.Level_320riginalCode.GDRainEmitterObjects4.length = 0;
gdjs.Level_320riginalCode.GDWeatherDebugTextObjects1.length = 0;
gdjs.Level_320riginalCode.GDWeatherDebugTextObjects2.length = 0;
gdjs.Level_320riginalCode.GDWeatherDebugTextObjects3.length = 0;
gdjs.Level_320riginalCode.GDWeatherDebugTextObjects4.length = 0;
gdjs.Level_320riginalCode.GDHeatDisplacementTextureObjects1.length = 0;
gdjs.Level_320riginalCode.GDHeatDisplacementTextureObjects2.length = 0;
gdjs.Level_320riginalCode.GDHeatDisplacementTextureObjects3.length = 0;
gdjs.Level_320riginalCode.GDHeatDisplacementTextureObjects4.length = 0;


return;

}

gdjs['Level_320riginalCode'] = gdjs.Level_320riginalCode;
