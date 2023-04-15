import html2canvas from 'html2canvas'

export default function ShareButton () {
  console.log(import.meta.env.TWITTER_API_KEY)

  function tweetScreenshot (screenshot: string) {
    const tweetText = 'Check out this screenshot of my React app!'
    const url = 'https://upload.twitter.com/1.1/media/upload.json'
    const tweetUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetText)

    fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + import.meta.env.VITE_TWITTER_API_KEY,
        'Content-Type': 'application/octet-stream'
      },
      body: dataURItoBlob(screenshot)
    })
      .then(response => response.json())
      .then(data => {
        const mediaId = data.media_id_string
        const tweetWithMediaUrl = tweetUrl + '&media_ids=' + mediaId
        window.open(tweetWithMediaUrl)
      })
      .catch(error => console.error('Error tweeting screenshot:', error))
  }

  function dataURItoBlob (dataURI: string) {
    const byteString = atob(dataURI.split(',')[1])
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    const ab = new ArrayBuffer(byteString.length)
    const ia = new Uint8Array(ab)
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i)
    }
    const blob = new Blob([ab], { type: mimeString })
    return blob
  }

  function captureScreenshot () {
    const element = document.getElementById('root')
    if (element) {
      html2canvas(element).then(canvas => {
        const screenshot = canvas.toDataURL()
        tweetScreenshot(screenshot)
      })
    }
  }

  return (
    <button onClick={captureScreenshot}>twitter</button>
  )
}
