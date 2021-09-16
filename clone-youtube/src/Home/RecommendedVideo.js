import React from 'react';
import './RecommendedVideo.css';
import VideoCard from './VideoCard';

function RecommendedVideo() {
    return (
        <div className = "recommendedVideo">
            <h2>Recommended</h2>
            <div className = "recommendedVideo__videos">
                <VideoCard
                    title="[Playlist] 주말 오후, 광합성하기 좋은 온실 카페에서 🌿ㅣ따뜻했던 무수한 날들에 대한 단상 📼"
                    views="119M Views"
                    timestamp="10개월 전"
                    image="https://i.ytimg.com/vi/obkZl2mYnpI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6YoaLWzWmba11NkEqt3lAxOvIoQ"
                    channel="essential;"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLQlCGal4wtBYuc-vKJuyA_rqb0hRRLZVnbr4JJa=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    title="아련한 추억을 떠올리게 하는 따뜻한 음색! 곽진언(Kwak Jineon)의 '양화대교'♬ | 비긴어게인 오픈마이크"
                    views="2.9M Views"
                    timestamp="2일 전"
                    image="https://i.ytimg.com/vi/iQyKvsONK7Y/mqdefault.jpg"
                    channel="Beginagain 비긴어게인"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLTPxrlNouoVn0ao9XqlQlt4RewtdWgcvmExY3UC=s176-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    title="[나 혼자 산다] 배구 여제 김연경이 절친들을 만나면? 무르익는 한우와 그렇지 못한 대화"
                    views="50M Views"
                    timestamp="3개월 전"
                    image="https://i.ytimg.com/an_webp/6oNtlIkc86E/mqdefault_6s.webp?du=3000&sqp=CMnxjIoG&rs=AOn4CLAF1555CJ1IRkLHz5jtJ47-1uOsGA"
                    channel="엠뚜루마뚜루 : MBC 공식 종합 채널"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLSQXso4M4sIMR3IMx9ZSaqZTN8qeXYwLEP7g5lP=s176-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    title="[도쿄올림픽] 배구 | 여자 배구 한일전 2세트 한 세트 내주고 승부는 '원점' (20:25) (2021.07.31/MBC뉴스)"
                    views="1.3M Views"
                    timestamp="2개월 전"
                    image="https://i.ytimg.com/vi/Y0ebNSgXPjM/hqdefault.jpg"
                    channel="MBCNEWS"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLR61bJXfaIRlzlgjervFJCCDsFdy26bLiasCubMZA=s48-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    title="[Playlist] 뽀송뽀송 ☁️ㅣ달짝지근 기분 좋아지는 Daily Pop 5ㅣSongs for a Sweet and Pleasant Day"
                    views="119M Views"
                    timestamp="1년 전"
                    image="https://i.ytimg.com/vi/5eS_gbUbAM0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWVopnA8B-KDa86bJ5OqpDCM7c1Q"
                    channel="essential;"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLQlCGal4wtBYuc-vKJuyA_rqb0hRRLZVnbr4JJa=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    title="[나 혼자 산다] 오디오가 안비어요... 배구 국대즈 4인방의 우당탕탕 캠핑 가는 길💦"
                    views="75M Views"
                    timestamp="2일 전"
                    image="https://i.ytimg.com/an_webp/vsySUnYP8q8/mqdefault_6s.webp?du=3000&sqp=CLfLi4oG&rs=AOn4CLBH7Ak0CPZ2Mb1fyO-0TGtCFzV6Mg"
                    channel="엠뚜루마뚜루 : MBC 공식 종합 채널"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLSQXso4M4sIMR3IMx9ZSaqZTN8qeXYwLEP7g5lP=s176-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    title="A Productive Day in My Life | Shot on Samsung S21📱"
                    views="40000 Views"
                    timestamp="7개월 전"
                    image="https://i.ytimg.com/vi/HWgQOQWW7RI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALNdMO_f6hKViVo6suuEFVnLpdIg"
                    channel="Created By Ella"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLTvtYwyD5203rz9X-HDsgOeJ-Ha_xxbIfqOIQlNwA=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    title="🎧정승환 Playlist🎧 '청각으로 힐링타임' 정승환 노래 모음 ｜ 비긴어게인 모아듣기"
                    views="3.6M Views"
                    timestamp="1년 전"
                    image="https://i.ytimg.com/vi/6VhkZfsqJJY/maxresdefault.jpg"
                    channel="Beginagain 비긴어게인"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLTPxrlNouoVn0ao9XqlQlt4RewtdWgcvmExY3UC=s48-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    title="[나 혼자 산다] 캠핑 떠난 국대즈의 허심탄회한 올림픽 토크 타임"
                    views="64M Views"
                    timestamp="7개월 전"
                    image="https://i.ytimg.com/an_webp/NLgYrPbYjHM/mqdefault_6s.webp?du=3000&sqp=COOEjYoG&rs=AOn4CLAVcl8n1blau30Kv3VYrahapPi9uw"
                    channel="엠뚜루마뚜루 : MBC 공식 종합 채널"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLSQXso4M4sIMR3IMx9ZSaqZTN8qeXYwLEP7g5lP=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    title="🎤 자다가도 뛰쳐나갈 목소리 크러쉬(Crush)x정승환(Jung Seung-hwan)의 ′자니′♬ "
                    views="3.6M Views"
                    timestamp="1년 전"
                    image="https://i.ytimg.com/vi/hWr7k-4Xrs8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAs4j4IcXbQyJOinfQCvb-MNzuZqg"
                    channel="Beginagain 비긴어게인"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLTPxrlNouoVn0ao9XqlQlt4RewtdWgcvmExY3UC=s176-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    title="[inflaylist] 공부/작업 할 때 집중해서 듣기 좋은 음악✍ | 4 hour playlist | lofi, piano | 직장인 | 대학생 | 프리랜서 | 취준생"
                    views="2.8M Views"
                    timestamp="4개월 전"
                    image="https://i.ytimg.com/vi/qMwzWk81tVM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXGs9frK8ne87AX0AFcYyts8jYwQ"
                    channel="인프런"
                    channelImage="https://yt3.ggpht.com/D-H9olfc9jwCSLlluq3_vnpMltSkLlVEwBXGsEm72WacL4sGNYL7GIH4CGO-99Qj4GEFtCDAXA=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard 
                    title="[4K][Special] 아이유(IU)의 킬링보이스를 라이브로! / 하루 끝, 너의 의미, 스물셋, 밤편지, 팔레트, 가을 아침, 삐삐, Blueming, 에잇, Coin, 라일락"
                    views="288M Views"
                    timestamp="1년 전"
                    image="https://i.ytimg.com/vi/wDfqXR_5yyQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABpZ540QQowrnZQvhdq9hTcAlxpw"
                    channel="딩고 뮤직 / dingo music"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLRSYuMMJXrGU7CNYuvObmqdR_Jmng3r5WyISAVA=s68-c-k-c0x00ffffff-no-rj"
                />
            </div>
        </div>
    )
}

export default RecommendedVideo
