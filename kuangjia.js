//数组遍历
function traverse(arr) {
    for (let i = 0; i < arr.length; i++) {
        //   迭代 arr[i]
    }
}

// 单链表
function ListNode(val,next){
    this.val = val;
    this.next = next;
}
// 单链表迭代
function traverse(head){
    for(let p = head;p!=null;p=p.next){

    }
}
// 单链表递归
function traverse(head){
    traverse(head.next)
}

// 定义一个二叉树
function TreeNode(val,left,right){
    this.val = val;
    this.left = left;
    this.right = right;
}

// 二叉树遍历
function traverse(root){
    console.log(root.val) //前序位置
    if(root.left) traverse(root.left)
    console.log(root.val) //中序位置
    if(root.right) traverse(root.right)
    console.log(root.val) //后序位置

}
// 二叉树递归
function traverse(root){
    //前序位置
    traverse(root.left)
    //中序位置
    traverse(root.right)
    //后序位置
}

// N叉树
function TreeNode(val,children){
    this.val = val;
    this.children = children;
}

// N叉树递归
function traverse(root){
    const {val,children} = root;
    console.log(val); //前序
    root.children.forEach(child => {
        traverse(child)
    });
    console.log(val); //后序
}

