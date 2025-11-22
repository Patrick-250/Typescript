
// writing a function the total earnings from  a song on a streaming platform


type Song = {
    title: string;
    artist: string;
    streams: number;
    
}
const ratePerStream:number = 0.005;


const calculateEarnings = (song:Song,ratePerStream:number)=>{
    return song.streams * ratePerStream;
}

const mySong:Song = {
    title: "My Hit Song",
    artist: "Famous Artist",
    streams: 1000000
};

const earnings = calculateEarnings(mySong,ratePerStream);
console.log(`Total earnings from "${mySong.title}" by ${mySong.artist}: $${earnings.toFixed(2)}`);