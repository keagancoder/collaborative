package com.citi.collaborative.domain;

import lombok.Data;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
public class Person {
    private String id;
    private String cabin;
    private String nameFirst;
    private String nameLast;
    private String gender;
    private String birthDate;
    private String age;
    private String recial;

    private String createTime;
    private String lastModifyTime;

    private String inMentalHeathTreatment;
    private String mentalHealthProvider;
    private String medicalServicesUtilized;
    private String medicalProviders;
    private String substanceUseDisorderProvider;
    private String caseManagementStatus;
    private String need;
    private String needDetail;
    private String phone;
    private String historyOfUse;
    private String currentOpiate;
    private String otherSubstances;
    private String previousUser;
    private String inopiateTreatmentAttimeOfResidency;
    private String intreatmentForOtherSubstances;
    private String nameOfProvider;
    private String dualDX;
    private String permanenthousing;
    private String palletVillage;
    private String assertiveCommunityTreatment;
    private String dead;
    private String longerTermSubstance;
    private String livveITheVillage;
    private String exitedProgram;
    private String substanceUseAndMentalHealthSupport;
    private String documentationAssistance;
    private String achivements;
    private String tag;
    private String function;
    private String createTime;
    private String lastModifiedTime;
    private String status;
}
