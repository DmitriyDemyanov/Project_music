const tracks = [
    {
        title: '3LAU, Bright Lights — How You Love Me',
        id: 't-4',
        length: 417,
        author: 'Bright Lights & Company',
        img: 'https://cdn.pixabay.com/photo/2020/04/30/03/26/rufous-5111261_1280.jpg'
    },
    {
        title: 'Bright Lights, Kaleena Zanders, Kandy — War For Love',
        id: 't-11',
        length: 210,
        author: 'Bright Lights',
        img: 'https://cdn.pixabay.com/photo/2022/07/10/19/30/house-7313645_1280.jpg'
    },
    {
        title: 'Pink Is Punk, Benny Benassi, Bright Lights — Ghost',
        id: 't-3',
        length: 315,
        author: 'Bright Lights & 50 Cent',
        img: 'https://cdn.pixabay.com/photo/2017/11/02/08/26/masterwort-2910368_1280.jpg'
    },
    {
        title: 'Hardwell, Dyro, Bright Lights — Never Say Goodbye',
        id: 't-28',
        length: 245,
        author: 'Bright Lights & Eminem',
        img: 'https://cdn.pixabay.com/photo/2022/02/15/13/00/building-7014904_1280.jpg'
    },
    {
        title: 'Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now',
        id: 't-55',
        length: 118,
        author: 'Bright Lights',
        img: 'https://cdn.pixabay.com/photo/2022/06/22/04/44/tindari-7276929_1280.jpg'
    },
    {
        title: 'Zedd, Bright Lights — Follow You Down',
        id: 't-7',
        length: 547,
        author: 'Bright Lights & Company',
        img: 'https://cdn.pixabay.com/photo/2022/07/19/00/25/grass-7331052_1280.jpg'
    },
];

const playBtn = document.querySelector('.tracks__triangle-right');
const progresBar = document.querySelector('.tracks__player_band-second');

const currentTime = document.querySelector('.tracks__player_stopwatch');
const endTime = document.querySelector('.tracks__player_number');

const trackImg = document.querySelector('[data-role=track-image]');
const tracksList = document.querySelector('[data-role=tracks-list]');

let isTrackPlay = false;
let interval = null;
let activeTrack = null;

let barLength = 317;
let trackTime = 210;
let playTime = 0;

tracksList.addEventListener('click', onTrackClick);
playBtn.addEventListener('click', onPlayClick);

function onPlayClick (event) {
    if (isTrackPlay) {
        stopTrack();

    } else {
        startTrack();
    }
}

function stopTrack() {
    isTrackPlay = false;
    playBtn.style.borderLeftColor = 'white';
    clearInterval(interval);
    console.log("Track STOP");
}

function startTrack() {
    isTrackPlay = true;
    playBtn.style.borderLeftColor = '#7a66cc';
    interval = setInterval(increasePosition, 1000);
    console.log("Track START");
}

function increasePosition() {
    const width = progresBar.getBoundingClientRect().width;
    progresBar.style.width = `${width + barLength / trackTime}px`;
    playTime += 1;
    currentTime.textContent = parseTime(playTime);
    if (playTime >= trackTime) {
        stopTrack();
        progresBar.style.width = `${barLength}px`;
    }
}

function parseTime(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes > 9 ? minutes : "0" + minutes}:${seconds > 9 ? seconds : "0" + seconds}`
}

function renderTracks(data) {
    for (let i = 0; i < data.length; i++) {
        const track = data[i];
        const num =  i + 1;

        const trackEl = document.createElement('div');
        trackEl.classList.add('track');
        trackEl.setAttribute('data-track-id', track.id);

        const numberEl = document.createElement('div');
        numberEl.classList.add('track__number');
        numberEl.textContent = `${num > 9 ? num : '0' + num}`;

        const titleEl = document.createElement('div');
        titleEl.classList.add('title', 'title_fz18', 'track__name');
        titleEl.textContent = track.title;

        trackEl.appendChild(numberEl);
        trackEl.appendChild(titleEl);

        tracksList.appendChild(trackEl);
    }
}

function setActiveTrack(id) {
    const track = tracks.find(function(item) {
        return item.id === id;
    });
    console.log(track);
    if (track === undefined) {
        return null;
    }

    if (activeTrack !== null) {
        activeTrack.classList.remove('active');
    }

    const trackEl = tracksList.querySelector(`[data-track-id=${id}]`);
    trackEl.classList.add('active');
    activeTrack = trackEl;

    playTime = 0;
    currentTime.textContent = parseTime(playTime);

    trackImg.setAttribute('src', track.img);

    endTime.textContent = parseTime(track.length);
    trackTime = track.length;
}

function onTrackClick(event) {
    const target = event.target.closest('[data-track-id]');
    console.log(target);
    if (target) {
        const id = target.getAttribute('data-track-id');
        stopTrack();
        progresBar.style.width = '0px';
        console.log(id);
        setActiveTrack(id);
    }
}


renderTracks(tracks);
setActiveTrack('t-28');