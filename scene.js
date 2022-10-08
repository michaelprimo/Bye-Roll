class Scene
{
    constructor(curLevel,curScene)
    {
        this.curLevel = curLevel;
        this.curScene = curScene;
        this.isLevel = false;
        this.waitFrames = 0;
        this.nextLevel = false;
        this.stop_waitFrames = false;
        this.death_waitFrames = false;
        this.canClick = true;
    }
}

let scene_manager = new Scene(0,0);