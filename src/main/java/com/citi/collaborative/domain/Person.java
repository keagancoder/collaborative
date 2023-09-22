package com.citi.collaborative.domain;

import com.citi.collaborative.dao.annotation.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbBean;

@EqualsAndHashCode(callSuper = true)
@Getter
@Setter
@Table("tsc_person")
@DynamoDbBean
public class Person extends CommonDomain {


    private String cabin;
    private String nameFirst;
    private String nameLast;
    private String gender;
    private String birthDate;
    private String age;
    private String recial;
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

    public static PersonBuilder builder() {
        return new PersonBuilder();
    }

    public static class PersonBuilder {
        private String id;
        private String name;
        private String createdTime;
        private String lastModifiedTime;
        private String status;
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

        private PersonBuilder() {
        }

        public static PersonBuilder aPerson() {
            return new PersonBuilder();
        }


        public PersonBuilder withName(String name) {
            this.name = name;
            return this;
        }

        public PersonBuilder withCreatedTime(String createdTime) {
            this.createdTime = createdTime;
            return this;
        }

        public PersonBuilder withLastModifiedTime(String lastModifiedTime) {
            this.lastModifiedTime = lastModifiedTime;
            return this;
        }

        public PersonBuilder withStatus(String status) {
            this.status = status;
            return this;
        }

        public PersonBuilder withId(String id) {
            this.id = id;
            return this;
        }

        public PersonBuilder withCabin(String cabin) {
            this.cabin = cabin;
            return this;
        }

        public PersonBuilder withNameFirst(String nameFirst) {
            this.nameFirst = nameFirst;
            return this;
        }

        public PersonBuilder withNameLast(String nameLast) {
            this.nameLast = nameLast;
            return this;
        }

        public PersonBuilder withGender(String gender) {
            this.gender = gender;
            return this;
        }

        public PersonBuilder withBirthDate(String birthDate) {
            this.birthDate = birthDate;
            return this;
        }

        public PersonBuilder withAge(String age) {
            this.age = age;
            return this;
        }

        public PersonBuilder withRecial(String recial) {
            this.recial = recial;
            return this;
        }

        public PersonBuilder withCreateTime(String createTime) {
            this.createTime = createTime;
            return this;
        }

        public PersonBuilder withLastModifyTime(String lastModifyTime) {
            this.lastModifyTime = lastModifyTime;
            return this;
        }

        public PersonBuilder withInMentalHeathTreatment(String inMentalHeathTreatment) {
            this.inMentalHeathTreatment = inMentalHeathTreatment;
            return this;
        }

        public PersonBuilder withMentalHealthProvider(String mentalHealthProvider) {
            this.mentalHealthProvider = mentalHealthProvider;
            return this;
        }

        public PersonBuilder withMedicalServicesUtilized(String medicalServicesUtilized) {
            this.medicalServicesUtilized = medicalServicesUtilized;
            return this;
        }

        public PersonBuilder withMedicalProviders(String medicalProviders) {
            this.medicalProviders = medicalProviders;
            return this;
        }

        public PersonBuilder withSubstanceUseDisorderProvider(String substanceUseDisorderProvider) {
            this.substanceUseDisorderProvider = substanceUseDisorderProvider;
            return this;
        }

        public PersonBuilder withCaseManagementStatus(String caseManagementStatus) {
            this.caseManagementStatus = caseManagementStatus;
            return this;
        }

        public PersonBuilder withNeed(String need) {
            this.need = need;
            return this;
        }

        public PersonBuilder withNeedDetail(String needDetail) {
            this.needDetail = needDetail;
            return this;
        }

        public PersonBuilder withPhone(String phone) {
            this.phone = phone;
            return this;
        }

        public PersonBuilder withHistoryOfUse(String historyOfUse) {
            this.historyOfUse = historyOfUse;
            return this;
        }

        public PersonBuilder withCurrentOpiate(String currentOpiate) {
            this.currentOpiate = currentOpiate;
            return this;
        }

        public PersonBuilder withOtherSubstances(String otherSubstances) {
            this.otherSubstances = otherSubstances;
            return this;
        }

        public PersonBuilder withPreviousUser(String previousUser) {
            this.previousUser = previousUser;
            return this;
        }

        public PersonBuilder withInopiateTreatmentAttimeOfResidency(String inopiateTreatmentAttimeOfResidency) {
            this.inopiateTreatmentAttimeOfResidency = inopiateTreatmentAttimeOfResidency;
            return this;
        }

        public PersonBuilder withIntreatmentForOtherSubstances(String intreatmentForOtherSubstances) {
            this.intreatmentForOtherSubstances = intreatmentForOtherSubstances;
            return this;
        }

        public PersonBuilder withNameOfProvider(String nameOfProvider) {
            this.nameOfProvider = nameOfProvider;
            return this;
        }

        public PersonBuilder withDualDX(String dualDX) {
            this.dualDX = dualDX;
            return this;
        }

        public PersonBuilder withPermanenthousing(String permanenthousing) {
            this.permanenthousing = permanenthousing;
            return this;
        }

        public PersonBuilder withPalletVillage(String palletVillage) {
            this.palletVillage = palletVillage;
            return this;
        }

        public PersonBuilder withAssertiveCommunityTreatment(String assertiveCommunityTreatment) {
            this.assertiveCommunityTreatment = assertiveCommunityTreatment;
            return this;
        }

        public PersonBuilder withDead(String dead) {
            this.dead = dead;
            return this;
        }

        public PersonBuilder withLongerTermSubstance(String longerTermSubstance) {
            this.longerTermSubstance = longerTermSubstance;
            return this;
        }

        public PersonBuilder withLivveITheVillage(String livveITheVillage) {
            this.livveITheVillage = livveITheVillage;
            return this;
        }

        public PersonBuilder withExitedProgram(String exitedProgram) {
            this.exitedProgram = exitedProgram;
            return this;
        }

        public PersonBuilder withSubstanceUseAndMentalHealthSupport(String substanceUseAndMentalHealthSupport) {
            this.substanceUseAndMentalHealthSupport = substanceUseAndMentalHealthSupport;
            return this;
        }

        public PersonBuilder withDocumentationAssistance(String documentationAssistance) {
            this.documentationAssistance = documentationAssistance;
            return this;
        }

        public PersonBuilder withAchivements(String achivements) {
            this.achivements = achivements;
            return this;
        }

        public PersonBuilder withTag(String tag) {
            this.tag = tag;
            return this;
        }

        public PersonBuilder withFunction(String function) {
            this.function = function;
            return this;
        }
        public Person build() {
            Person person = new Person();
            person.setId(id);
            person.setName(name);
            person.setCreatedTime(createdTime);
            person.setLastModifiedTime(lastModifiedTime);
            person.setStatus(status);
            person.setId(id);
            person.setCabin(cabin);
            person.setNameFirst(nameFirst);
            person.setNameLast(nameLast);
            person.setGender(gender);
            person.setBirthDate(birthDate);
            person.setAge(age);
            person.setRecial(recial);
            person.setInMentalHeathTreatment(inMentalHeathTreatment);
            person.setMentalHealthProvider(mentalHealthProvider);
            person.setMedicalServicesUtilized(medicalServicesUtilized);
            person.setMedicalProviders(medicalProviders);
            person.setSubstanceUseDisorderProvider(substanceUseDisorderProvider);
            person.setCaseManagementStatus(caseManagementStatus);
            person.setNeed(need);
            person.setNeedDetail(needDetail);
            person.setPhone(phone);
            person.setHistoryOfUse(historyOfUse);
            person.setCurrentOpiate(currentOpiate);
            person.setOtherSubstances(otherSubstances);
            person.setPreviousUser(previousUser);
            person.setInopiateTreatmentAttimeOfResidency(inopiateTreatmentAttimeOfResidency);
            person.setIntreatmentForOtherSubstances(intreatmentForOtherSubstances);
            person.setNameOfProvider(nameOfProvider);
            person.setDualDX(dualDX);
            person.setPermanenthousing(permanenthousing);
            person.setPalletVillage(palletVillage);
            person.setAssertiveCommunityTreatment(assertiveCommunityTreatment);
            person.setDead(dead);
            person.setLongerTermSubstance(longerTermSubstance);
            person.setLivveITheVillage(livveITheVillage);
            person.setExitedProgram(exitedProgram);
            person.setSubstanceUseAndMentalHealthSupport(substanceUseAndMentalHealthSupport);
            person.setDocumentationAssistance(documentationAssistance);
            person.setAchivements(achivements);
            person.setTag(tag);
            person.setFunction(function);
            person.setStatus(status);
            return person;
        }
    }
}
