export const readAsDataURL = files =>
  Promise.all(files.map(file =>
    new Promise(resolve => {
      const reader = new FileReader()

      reader.onload = (event:any)  => {
        resolve(event.target.result)
      }

      reader.readAsDataURL(file)
    })
  ))
