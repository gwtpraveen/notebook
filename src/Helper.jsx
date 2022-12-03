export class Tags {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}

export class NewNoteObj {
    constructor(title, tags, note) {
        this.title = title;
        this.tags = tags;
        this.note = note;
        this.date = new Date().toDateString();
        this.viewedTimes = 0;
        this.id = Math.random() * 99999999;
    }
}
