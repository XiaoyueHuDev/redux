export default function generateTree() {
  let tree = {
    selected: {
      id: 0,
      filePaths: ['http:xxxxxxxx.png'],
      folderName: 'Files',
      childIds: [],
      parentIds: []
    },
    0: {
      id: 0,
      filePaths: ['http:xxxxxxxx.png'],
      folderName: 'Files',
      childIds: [],
      parentIds: []
    }
  }

  return tree
}
