/*
  musicFrame++;
  if(musicFrame >= 3600)
  {
    music();
    musicFrame = 0;
  }
  */


a=(notes,center,duration,decaystart,decayduration,interval,volume,waveform,i)=>{
    with(A=new AudioContext)
      with(G=createGain())
        for(i of notes){
          with(O=createOscillator()){
            connect(G),
            G.connect(destination),
            start(i[0]*interval),
            frequency.setValueAtTime(center*1.06**(13-i[1]),i[0]*interval),
            type=waveform,
            gain.setValueAtTime(volume,i[0]*interval),
            gain.setTargetAtTime(1e-5,i[0]*interval+decaystart,decayduration),
            stop(i[0]*interval+duration);
            
          }
       }
  }
  
  function music()
{
  a([[4,9],[5,9],[5,8],[6,8],[7,8],[8,9],[10,9],[12,10],[14,10],[15,10],[16,10],[17,10],[17,11],[18,11],[20,14],[22,10],[24,7],[26,5],[27,5],[29,4],[30,3],[31,3],[35,5],[36,6],[39,7],[41,8],[43,9],[45,11],[47,12],[48,14],[50,15],[51,16],[52,16],[52,17],[53,17],[54,18],[55,18],[56,18],[57,18],[59,16],[61,15],[63,10],[64,9],[64,7],[65,6],[66,6],[66,5],[67,4],[69,3],[71,2],[72,2],[74,2],[76,2],[78,2],[80,3],[83,4],[85,5],[88,6],[90,8],[92,9],[94,10],[95,11],[96,11],[96,12],[98,13],[100,13],[101,14],[102,15],[104,16],[106,17],[108,18],[109,18],[109,19],[110,21],[111,21],[111,20],[113,19],[114,16],[115,15],[116,13],[117,13],[119,11],[123,9],[126,8],[127,8],[128,8],[129,8],[131,8],[133,8],[135,8],[137,8],[139,8],[141,8],[143,9],[146,10],[148,10],[150,10],[154,11],[156,11],[159,12],[161,12],[163,13],[166,13],[167,13],[168,13],[170,13],[171,14],[173,14],[176,14],[177,14],[178,14],[179,8],[179,7],[180,7],[181,6],[182,6],[182,5],[183,5],[184,5],[185,5],[188,6],[191,7],[193,9],[194,10],[195,12],[198,16],[200,17],[201,19],[202,20],[204,21],[205,21],[206,21],[208,21],[209,21],[210,21],[212,20],[214,19],[215,18],[216,18],[217,17],[219,16],[220,15],[221,15],[222,14],[223,8],[225,8],[228,8],[231,8],[233,8],[236,8],[238,8],[242,8],[244,9],[246,9],[248,10],[250,11],[252,11],[254,12],[255,13],[257,14],[258,15],[261,17],[262,17],[263,17],[265,17],[267,18],[268,18],[270,18],[271,18],[273,18],[276,18],[277,17],[280,17],[282,17],[284,16],[286,16],[288,16],[290,15],[292,15],[294,14],[295,14],[296,13],[297,13],[298,13]],400,.19,.18,.005,.2,.1,'');
a([[0,6],[1,6],[3,6],[5,5],[8,5],[11,4],[14,4],[17,4],[20,3],[25,3],[28,3],[32,3],[37,3],[40,3],[46,3],[51,3],[56,3],[59,4],[65,5],[71,6],[75,6],[78,7],[81,7],[85,8],[88,8],[90,9],[91,9],[93,10],[94,16],[95,15],[97,14],[103,12],[110,10],[113,9],[119,7],[125,6],[131,5],[139,5],[147,5],[153,5],[156,5],[160,5],[164,5],[168,5],[170,6],[172,6],[174,6],[177,6],[179,7],[182,7],[184,7],[187,9],[190,10],[192,11],[293,12],[291,13],[289,14],[286,15],[282,15],[279,15],[277,14],[274,12],[266,9],[262,8],[258,8],[255,7],[251,8],[247,9],[241,12],[237,13],[233,15],[230,16],[227,17],[224,18],[219,19],[216,20],[213,21],[212,21],[211,21],[210,21],[208,20],[207,19],[205,19],[203,19],[201,18],[200,18],[199,18],[198,18],[197,18],[196,18],[195,18],[194,18],[193,18],[298,9],[298,10],[298,11],[298,12],[298,13],[298,14],[298,15]],90,.19,.18,.005,.2,.1,'square');
}