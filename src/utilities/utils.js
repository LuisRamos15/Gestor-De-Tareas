export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

export const persisLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

export const clearLocalStorage = (key) => {
  localStorage.removeItem(key)
}