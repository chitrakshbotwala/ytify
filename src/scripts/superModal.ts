import { atpSelector, listContainer, superModal } from "../lib/dom";
import player from "../lib/player";
import { $, fetchList } from "../lib/utils";
import { addToCollection, createPlaylist } from "./library";
import { appendToQueuelist, firstItemInQueue } from "./queue";

const superModalList = <HTMLUListElement>superModal.firstElementChild;

const [playNow, enqueue, _, startRadio, downloadBtn, openChannelBtn] = <HTMLCollectionOf<HTMLLIElement>>superModalList.children;


superModal.addEventListener('click', () => {
  superModal.close();
  history.back();
});

superModalList.onclick = _ => _.stopPropagation();

playNow.addEventListener('click', () => {
  player(superModal.dataset.id);
  superModal.click();
});

enqueue.addEventListener('click', () => {
  if (firstItemInQueue()?.matches('h1'))
    firstItemInQueue().remove();
  appendToQueuelist(superModal.dataset);
  superModal.click();
});


startRadio.addEventListener('click', async () => {
  superModal.click();
  fetchList('/playlists/RD' + superModal.dataset.id, true);
});



atpSelector.addEventListener('change', () => {
  let title;
  if (!atpSelector.value) return;
  if (atpSelector.value === '+pl') {
    title = prompt('Playlist Title')
    if (title)
      createPlaylist(title);
  }
  else title = atpSelector.value;

  if (title)
    addToCollection(title, superModal.dataset);
  superModal.click();
  atpSelector.selectedIndex = 0;
});


downloadBtn.addEventListener('click', () => {
  superModal.click();
  const provider = 'https://co.wuk.sh/api/json';
  const streamUrl = 'https://youtu.be/' + superModal.dataset.id;
  fetch(provider, {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      url: streamUrl,
      isAudioOnly: true,
      filenamePattern: 'basic'
    })
  })
    .then(_ => _.json())
    .then(_ => {
      const anchor = $('a');
      anchor.href = _.url;
      anchor.click();
    })
    .catch(_ => alert(_))
});



openChannelBtn.addEventListener('click', () => {
  // data binding for save list & open in yt btn
  (<HTMLButtonElement>document.getElementById('openInYT')).innerHTML = '<i class="ri-youtube-line"></i> ' + <string>superModal.dataset.author;
  const channelUrl = <string>superModal.dataset.channelUrl;
  listContainer.dataset.url = channelUrl;
  fetchList(channelUrl);
  superModal.click();
})