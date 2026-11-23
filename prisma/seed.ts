import {
    PrismaClient,
    EmploymentType,
    EmployeeStatus,
    ProjectStatus,
} from "@prisma/client";

import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import bcrypt from "bcrypt";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
    adapter,
});

async function main() {
    console.log("🌱 Starting RiMax Technologies Database Seed...");

    // =====================================================
    // DEPARTMENTS
    // =====================================================

    const departments = [
        {
            name: "Management",
            code: "MGMT",
            description: "Executive Management",
        },
        {
            name: "Administration",
            code: "ADMIN",
            description: "Administration Department",
        },
        {
            name: "Human Resources",
            code: "HR",
            description: "Human Resources Department",
        },
        {
            name: "Operations",
            code: "OPS",
            description: "Customer Support Operations",
        },
        {
            name: "Business Development",
            code: "BD",
            description: "Business Development",
        },
    ];

    for (const department of departments) {
        await prisma.department.upsert({
            where: {
                code: department.code,
            },
            update: department,
            create: department,
        });
    }

    console.log("✅ Departments Seeded");

    // =====================================================
    // FETCH DEPARTMENTS
    // =====================================================

    const management = await prisma.department.findUnique({
        where: { code: "MGMT" },
    });

    const administration = await prisma.department.findUnique({
        where: { code: "ADMIN" },
    });

    const hr = await prisma.department.findUnique({
        where: { code: "HR" },
    });

    const operations = await prisma.department.findUnique({
        where: { code: "OPS" },
    });

    const business = await prisma.department.findUnique({
        where: { code: "BD" },
    });

    if (
        !management ||
        !administration ||
        !hr ||
        !operations ||
        !business
    ) {
        throw new Error("Departments could not be created.");
    }

    // =====================================================
    // ROLES
    // =====================================================

    const roles = [
        {
            name: "CEO",
            level: 1,
            description: "Chief Executive Officer",
            departmentId: management.id,
        },
        {
            name: "System Administrator",
            level: 2,
            description: "ERP Administrator",
            departmentId: administration.id,
        },
        {
            name: "HR Manager",
            level: 3,
            description: "Human Resources Manager",
            departmentId: hr.id,
        },
        {
            name: "Operations Manager",
            level: 3,
            description: "Operations Manager",
            departmentId: operations.id,
        },
        {
            name: "Operations Team Lead",
            level: 4,
            description: "Operations Team Lead",
            departmentId: operations.id,
        },
        {
            name: "Support Engineer",
            level: 5,
            description: "Customer Support Engineer",
            departmentId: operations.id,
        },
        {
            name: "Business Development Manager",
            level: 3,
            description: "Business Development Manager",
            departmentId: business.id,
        },
        {
            name: "Business Development Executive",
            level: 5,
            description: "Business Development Executive",
            departmentId: business.id,
        },
    ];

    for (const role of roles) {
        await prisma.role.upsert({
            where: {
                name: role.name,
            },
            update: role,
            create: role,
        });
    }

    console.log("✅ Roles Seeded");

    // =====================================================
    // FETCH ADMIN ROLE
    // =====================================================

    const adminRole = await prisma.role.findUnique({
        where: {
            name: "System Administrator",
        },
    });

    if (!adminRole) {
        throw new Error("Admin role not found.");
    }

    // =====================================================
    // COMPANY SETTINGS
    // =====================================================

    await prisma.companySetting.upsert({
        where: {
            companyName: "RiMax Technologies",
        },
        update: {
            companyEmail: "admin@rimaxtech.com",
            companyWebsite: "https://rimaxtech.com",
            logoUrl: "/logos/rimax-logo-v2.png",
            country: "India",
            timezone: "Asia/Kolkata",
            officeStart: "09:00",
            officeEnd: "18:00",
        },
        create: {
            companyName: "RiMax Technologies",
            companyEmail: "admin@rimaxtech.com",
            companyWebsite: "https://rimaxtech.com",
            logoUrl: "/logos/rimax-logo-v2.png",
            country: "India",
            timezone: "Asia/Kolkata",
            officeStart: "09:00",
            officeEnd: "18:00",
        },
    });

    console.log("✅ Company Settings Seeded");

    // =====================================================
    // PASSWORD
    // =====================================================

    const passwordHash = await bcrypt.hash("Admin@123", 12);

// PART 2 STARTS HERE

    // =====================================================
    // ADMIN EMPLOYEE
    // =====================================================

    const adminEmployee = await prisma.employee.upsert({
        where: {
            employeeCode: "RM0001",
        },
        update: {
            firstName: "RiMax",
            lastName: "Administrator",
            email: "admin@rimaxtech.com",
            joiningDate: new Date(),
            employmentType: EmploymentType.FULL_TIME,
            status: EmployeeStatus.ACTIVE,
            departmentId: administration.id,
            roleId: adminRole.id,
        },
        create: {
            employeeCode: "RM0001",

            firstName: "RiMax",
            lastName: "Administrator",

            email: "admin@rimaxtech.com",

            joiningDate: new Date(),

            employmentType: EmploymentType.FULL_TIME,

            status: EmployeeStatus.ACTIVE,

            departmentId: administration.id,

            roleId: adminRole.id,
        },
    });

    console.log("✅ Admin Employee Seeded");

    // =====================================================
    // ADMIN USER
    // =====================================================

    await prisma.user.upsert({
        where: {
            username: "admin",
        },
        update: {
            email: "admin@rimaxtech.com",
            passwordHash,
            isFirstLogin: true,
            isActive: true,
            isLocked: false,
            failedAttempts: 0,
        },
        create: {
            employeeId: adminEmployee.id,

            username: "admin",

            email: "admin@rimaxtech.com",

            passwordHash,

            isFirstLogin: true,

            isActive: true,

            isLocked: false,

            failedAttempts: 0,
        },
    });

    console.log("✅ Admin User Seeded");

    // =====================================================
    // DEFAULT PROJECT
    // =====================================================

    const project = await prisma.project.upsert({
        where: {
            projectCode: "RM-ERP-001",
        },
        update: {
            projectName: "RiMax ERP Development",
            clientName: "Internal",
            description: "Internal ERP Development",
            managerId: adminEmployee.id,
            status: ProjectStatus.ACTIVE,
        },
        create: {
            projectCode: "RM-ERP-001",

            projectName: "RiMax ERP Development",

            clientName: "Internal",

            description: "Internal ERP Development",

            managerId: adminEmployee.id,

            status: ProjectStatus.ACTIVE,

            startDate: new Date(),
        },
    });

    console.log("✅ Default Project Seeded");

    // =====================================================
    // PROJECT MEMBER
    // =====================================================

    await prisma.projectMember.upsert({
        where: {
            projectId_employeeId: {
                projectId: project.id,
                employeeId: adminEmployee.id,
            },
        },
        update: {
            roleInProject: "System Administrator",
        },
        create: {
            projectId: project.id,

            employeeId: adminEmployee.id,

            roleInProject: "System Administrator",
        },
    });

    console.log("✅ Project Member Seeded");

    // =====================================================
    // WELCOME NOTIFICATION
    // =====================================================

    const existingNotification =
        await prisma.notification.findFirst({
            where: {
                employeeId: adminEmployee.id,
                title: "Welcome to RiMax ERP",
            },
        });

    if (!existingNotification) {
        await prisma.notification.create({
            data: {
                employeeId: adminEmployee.id,

                title: "Welcome to RiMax ERP",

                message:
                    "Welcome! Your RiMax ERP account has been created successfully.",
            },
        });
    }

    console.log("✅ Welcome Notification Seeded");

    // =====================================================
    // FINISHED
    // =====================================================

    console.log("");
    console.log("========================================");
    console.log("🎉 RiMax Technologies Seed Completed");
    console.log("========================================");
    console.log("");
    console.log("Login Credentials");
    console.log("------------------------------");
    console.log("Username : admin");
    console.log("Password : Admin@123");
    console.log("");
    console.log("Database seeded successfully.");
}

main()
    .catch((error) => {
        console.error("");
        console.error("❌ Seed Failed");
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });