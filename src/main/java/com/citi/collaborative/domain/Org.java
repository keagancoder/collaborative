package com.citi.collaborative.domain;

import com.citi.collaborative.dao.annotation.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbBean;

@EqualsAndHashCode(callSuper = true)
@Getter
@Setter
@Table("tsc_org")
@DynamoDbBean
@ToString
public class Org extends CommonDomain {

    private String function;
    private String tag;


    public enum Tag {
        EMPLOYMENT, MENTAL_HEALTH_SUPPORT, MEDICAL_CARE, LIFE_SKILLS, ELDERLY, SERVICE_CONNECTIONS, REENTRY
    }

    public static OrgBuilder builder() {
        return new OrgBuilder();
    }

    public static final class OrgBuilder {
        private String id;
        private String name;
        private String createdTime;
        private String lastModifiedTime;
        private String status;
        private String function;
        private String tag;

        private OrgBuilder() {
        }


        public OrgBuilder id(String id) {
            this.id = id;
            return this;
        }

        public OrgBuilder name(String name) {
            this.name = name;
            return this;
        }

        public OrgBuilder createdTime(String createdTime) {
            this.createdTime = createdTime;
            return this;
        }

        public OrgBuilder lastModifiedTime(String lastModifiedTime) {
            this.lastModifiedTime = lastModifiedTime;
            return this;
        }

        public OrgBuilder status(String status) {
            this.status = status;
            return this;
        }

        public OrgBuilder function(String function) {
            this.function = function;
            return this;
        }

        public OrgBuilder tag(String tag) {
            this.tag = tag;
            return this;
        }

        public Org build() {
            Org org = new Org();
            org.setId(id);
            org.setName(name);
            org.setCreatedTime(createdTime);
            org.setLastModifiedTime(lastModifiedTime);
            org.setStatus(status);
            org.setFunction(function);
            org.setTag(tag);
            return org;
        }
    }
}
