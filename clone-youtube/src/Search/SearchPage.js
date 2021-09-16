import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';


//Channel, videoRow
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AKedOLQlCGal4wtBYuc-vKJuyA_rqb0hRRLZVnbr4JJa=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="essential;"
                verified
                subs="67.5만명"
                noOfVideos = {225}
                description = "music to make your day. 좋은 선곡 좋은 하루"
            />
            <hr />
            <VideoRow 
                view="119M Views"
                title="[Playlist] 뽀송뽀송 ☁️ㅣ달짝지근 기분 좋아지는 Daily Pop 5ㅣSongs for a Sweet and Pleasant Day"
                timestamp="1년 전"
                image="https://i.ytimg.com/vi/5eS_gbUbAM0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWVopnA8B-KDa86bJ5OqpDCM7c1Q"
                channel="essential;"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQlCGal4wtBYuc-vKJuyA_rqb0hRRLZVnbr4JJa=s176-c-k-c0x00ffffff-no-rj-mo"
                description="Playlist by 세렌디피티 (벅스 뮤직PD) music to make your day."
            />
            <VideoRow 
                view="74M Views"
                title="[Playlist] 차가워진 밤공기에 어울리는 Deep Groove🌒ㅣDeep & groovy vibes on a cold night🌒"
                timestamp="1년 전"
                image="https://i.ytimg.com/vi/qwB_fMR4KD0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQr6DfrtzTjAkx7bnNguc60Pw8Gg"
                channel="essential;"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQlCGal4wtBYuc-vKJuyA_rqb0hRRLZVnbr4JJa=s176-c-k-c0x00ffffff-no-rj-mo"
                description="쌀쌀한 저녁
                낯설지 않은 편안함🪔
                
                Playlist by CHUYA (벅스 뮤직PD)
                
                *벅스에서 고음질로 감상해보세요!
                :: http://bugs.kr/!yt0192"
            />
            <VideoRow 
                view="119M Views"
                title="[Playlist] 월요일 안녕?ㅣ축 처지는 기분을 바꿔줄 Refresh Popㅣfresh up daily pop 🍀"
                timestamp="3일 전"
                image="https://i.ytimg.com/vi/49B9cpKqtMA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqVGJcTwfIxLWjkJs9ntAXY9SNQA"
                channel="essential;"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQlCGal4wtBYuc-vKJuyA_rqb0hRRLZVnbr4JJa=s176-c-k-c0x00ffffff-no-rj-mo"
                description="Playlist by 세렌디피티 (벅스 뮤직PD)
                *벅스에서 광고 없이 감상해보세요!
                :: http://bugs.kr/!yt0254
                *세렌디피티님의 감성이 내 취향이라면!
                :: http://bugs.kr/!yt0254p
                music to make your day."
            />
            <VideoRow 
                view="528M Views"
                title="[Playlist] 월요병 ㅃㅃㅣ산뜻하게 충전하는 하루! 활력 뿜뿜 BGM 2ㅣCharge Up Your Day!"
                timestamp="2년 전"
                image="https://i.ytimg.com/vi/F9Ex1ESEWN4/maxresdefault.jpg"
                channel="essential;"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQlCGal4wtBYuc-vKJuyA_rqb0hRRLZVnbr4JJa=s176-c-k-c0x00ffffff-no-rj-mo"
                description="Playlist by Lotus (벅스 뮤직PD)
                *더 편하게 감상해보세요
                :: http://bugs.kr/!yt0030
                *Lotus님의 플레이리스트가 내 취향이라면!
                :: http://bugs.kr/!yt0030pd
                music to make your day."
            />
            <VideoRow 
                view="119M Views"
                title="[Playlist] 뽀송뽀송 ☁️ㅣ달짝지근 기분 좋아지는 Daily Pop 5ㅣSongs for a Sweet and Pleasant Day"
                timestamp="1년 전"
                image="https://i.ytimg.com/vi/5eS_gbUbAM0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWVopnA8B-KDa86bJ5OqpDCM7c1Q"
                channel="essential;"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQlCGal4wtBYuc-vKJuyA_rqb0hRRLZVnbr4JJa=s176-c-k-c0x00ffffff-no-rj-mo"
                description="Playlist by 세렌디피티 (벅스 뮤직PD) music to make your day."
            />

        </div>
        

    )
}

export default SearchPage
