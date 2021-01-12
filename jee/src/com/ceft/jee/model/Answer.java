package com.ceft.jee.model;

import java.sql.Date;
import java.text.SimpleDateFormat;

public class Answer {
	private String author;
	private String comment;
	private long publishTime = 1601055128136L;
	
	public Answer(String author, String comment, long publishTime) {
		this.author = author;
		this.comment = comment;
		this.publishTime = publishTime;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getPublishTime() {
		SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss z");
		Date date = new Date(publishTime);
		return formatter.format(date);
	}
	public void setPublishTime(long publishTime) {
		this.publishTime = publishTime;
	}
	@Override
	public String toString() {
		return "Answer [author=" + author + ", comment=" + comment + ", publishTime=" + publishTime + "]";
	}
}
