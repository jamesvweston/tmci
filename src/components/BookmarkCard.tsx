import React from 'react';
import {Bookmark} from "../types";

interface Props {
    bookmark: Bookmark;
    onDelete: VoidFunction
}

const BookmarkCard: React.FC<Props> = ({
    bookmark,
   onDelete
}) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl" style={{width: '20%'}}>
            <div>
                <button onClick={() => onDelete()}>Delete me</button>
            </div>
            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Created By: {`${bookmark.user.first_name} ${bookmark.user.last_name}`}</h3>
            <a
                href={bookmark.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {bookmark.url}
            </a>
        </div>
    );
}

export default BookmarkCard;
