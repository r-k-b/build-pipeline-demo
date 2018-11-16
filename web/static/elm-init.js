const storageKey = 'store'
const flags = localStorage.getItem(storageKey)
const app = Elm.Main.init({flags: flags})

// noinspection JSUnresolvedVariable
app.ports.storeCache.subscribe(function updateStorage(val) {
  if (val === null) {
    localStorage.removeItem(storageKey)
  } else {
    localStorage.setItem(storageKey, JSON.stringify(val))
  }

  // Report that the new session was stored successfully.
  setTimeout(function reportSuccess() {
    // noinspection JSUnresolvedVariable
    app.ports.onStoreChange.send(val)
  }, 0)
})

// Whenever localStorage changes in another tab, report it if necessary.
window.addEventListener('storage', function onStorageEvent(event) {
  // noinspection JSUnresolvedVariable
  if (event.storageArea === localStorage && event.key === storageKey) {
    // noinspection JSUnresolvedVariable
    app.ports.onStoreChange.send(event.newValue)
  }
}, false)
