package com.mysite.sbb.question;

import java.time.LocalDateTime;
import java.util.List;

import com.mysite.sbb.answer.Answer;
import com.mysite.sbb.user.SiteUser;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Table(name="question")
@Getter
@Setter
@Entity
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	// 속성 값 1씩 자동 증가
	private Integer id;
	
	@Column(length = 200)	// 컬럼의 길이
	private String subject;
	
	@Column(columnDefinition = "TEXT")	// 컬럼의 속성 정의
	private String content;
	
	private LocalDateTime createDate;
	
	// 질문 하나에는 여러개의 답변이 작성될 수 있다. 이때 질문을 삭제하면 그에 달린 답변들도 모두 함께 삭제하기 위해서
	@OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
	private List<Answer> answerList;
	// 이제 질문 객체(예:question)에서 답변을 참조하려면 question.getAnswerList()를 호출
	
    @ManyToOne
    private SiteUser author;
}
