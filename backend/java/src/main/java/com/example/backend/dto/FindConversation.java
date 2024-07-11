package com.example.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FindConversation {
    private Long sender;
    private Long receiver;
}

