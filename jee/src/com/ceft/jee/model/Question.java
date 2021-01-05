package com.ceft.jee.model;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;

public class Question {
	private String title = "";
	private String author = "";
	private String question = "";
	private long publishTime = 1601055128136L;
	private ArrayList<Answer> answers = new ArrayList<>();
	
	public Question(String title, String author, String question, long publishTime, Answer[] answers) {
		this.title = title;
		this.author = author;
		this.question = question;
		this.publishTime = publishTime;
		this.answers = new ArrayList<>(Arrays.asList(answers));
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getPublishTime() {
		SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss z");
		Date date = new Date(publishTime);
		return formatter.format(date);
	}

	public void setPublishTime(long publishTime) {
		this.publishTime = publishTime;
	}

	public ArrayList<Answer> getAnswers() {
		return answers;
	}

	public void addAnswer(Answer answers) {
		this.answers.add(answers);
	}

	@Override
	public String toString() {
		return "Question [title=" + title + ", author=" + author + ", question=" + question + ", publishTime="
				+ publishTime + ", answers=" + answers.toString() + "]";
	}
}
