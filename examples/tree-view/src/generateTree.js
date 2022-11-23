export default function generateTree() {
  let tree = {
    selected: {
      id: 0,
      filePaths: ['http:xxxxxxxx.png'],
      folderName: 'folder0',
      childIds: [],
      parentIds: []
    },
    0: {
      id: 0,
      filePaths: ['http:xxxxxxxx.png'],
      folderName: 'folder0',
      childIds: [],
      parentIds: []
    }
  }

  return tree
}
