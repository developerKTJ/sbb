package com.mysite.sbb.answer;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;

import com.mysite.sbb.question.Question;
import com.mysite.sbb.user.SiteUser;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Table(name="answer")
@Getter
@Setter
@Entity
public class Answer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)		// id 속성 값 자동증가
	private Integer id;
	
	@Column(columnDefinition = "TEXT")	// 컬럼 속성 정의
	private String content;
	
	@CreatedDate
	private LocalDateTime createDate;
	
	// @ManyToOne은 부모 자식 관계를 갖는 구조에서 사용한다. 여기서 부모는 Question, 자식은 Answer라고 할 수 있다.
	@ManyToOne	// @ManyToOne은 N:1 관계 
	private Question question;	// question 속성은 답변 엔티티에서 질문 엔티티를 참조하기 위해 추가
	
    @ManyToOne
    private SiteUser author;
}
